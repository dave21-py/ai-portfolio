'use client';

import { useEffect, useRef } from 'react';

// Helper function for linear interpolation (the core of the "fluid" effect)
const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

const FluidCursor = () => {
  const cursorRef = useRef(null);

  // We'll store the last and current mouse positions
  const mousePos = useRef({ x: 0, y: 0 });
  const previousMousePos = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null); // To store the requestAnimationFrame

  useEffect(() => {
    // This function only updates the target mouse position
    const moveCursor = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', moveCursor);

    // This is our animation loop
    const animate = () => {
      // Interpolate the previous position towards the current mouse position
      previousMousePos.current.x = lerp(previousMousePos.current.x, mousePos.current.x, 0.1);
      previousMousePos.current.y = lerp(previousMousePos.current.y, mousePos.current.y, 0.1);

      // Apply the position using a more performant CSS transform
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${previousMousePos.current.x}px, ${previousMousePos.current.y}px, 0)`;
      }

      // Keep the loop going
      requestRef.current = requestAnimationFrame(animate);
    };

    // Initialize position and start the animation loop
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    previousMousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    requestRef.current = requestAnimationFrame(animate);


    // Cleanup function to remove event listener and stop animation
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(requestRef.current);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      ref={cursorRef}
      className="absolute top-0 left-0 pointer-events-none 
                 w-96 h-96  // <-- MUCH BIGGER SIZE
                 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                 rounded-full opacity-40 // <-- Slightly less opaque
                 filter blur-3xl // <-- The blur now has a large object to work on
                 -translate-x-1/2 -translate-y-1/2" // <-- Center the glow on the cursor
    ></div>
  );
};

export default FluidCursor;