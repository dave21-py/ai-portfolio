// FluidCursor.tsx
'use client';

import { useEffect, useRef } from 'react';

// linear interpolation helper
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

const FluidCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const prevPos = useRef({ ...mousePos.current });
  const rafRef = useRef<number>();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      // interpolate toward the real mouse
      prevPos.current.x = lerp(prevPos.current.x, mousePos.current.x, 0.1);
      prevPos.current.y = lerp(prevPos.current.y, mousePos.current.y, 0.1);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${prevPos.current.x}px, ${prevPos.current.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseDown = () => {
    const el = cursorRef.current;
    if (!el) return;
    // pulse on click
    el.style.transform += ' scale(1.2)';
    el.style.filter = 'blur(4rem)';
    setTimeout(() => {
      el.style.transform = el.style.transform.replace(' scale(1.2)', '');
      el.style.filter = '';
    }, 200);
  };

  return (
    <div
      ref={cursorRef}
      onMouseDown={handleMouseDown}
      className="absolute top-0 left-0 pointer-events-none
                 w-32 h-32
                 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                 rounded-full opacity-40 filter blur-2xl
                 -translate-x-1/2 -translate-y-1/2"
      style={{
        willChange: 'transform, filter',
        transition: 'transform 0.2s ease-out, filter 0.2s ease-out',
      }}
    />
  );
};

export default FluidCursor;
