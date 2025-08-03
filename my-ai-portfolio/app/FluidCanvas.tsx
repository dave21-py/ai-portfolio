'use client';

import { useEffect, useRef } from 'react';
import webglFluid from 'webgl-fluid';

const FluidCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Using your original, smooth configuration ---
    webglFluid(canvas, {
      IMPRESS: 0.8,
      PRESSURE: 0.8,
      CURL: 20,
      SPLAT_RADIUS: 0.35,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      TRANSPARENT: true,
      BACKGROUND_COLOR: { r: 1, g: 1, b: 1 }, // Note: This sets the background to white. If you want black, use { r: 0, g: 0, b: 0 }
      BLOOM: true,
      BLOOM_ITERATIONS: 4,
      BLOOM_RESOLUTION: 128,
      SUNRAYS: false,
      TEXTURE_DOWNSAMPLE: 2,
      DYE_RESOLUTION: 512,
      VELOCITY_RESOLUTION: 512,
      DENSITY_DISSIPATION: 1.2,
      VELOCITY_DISSIPATION: 0.5,
    });

    // --- The fix for the 'P' key, added carefully ---
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'p') {
        e.stopPropagation(); // Prevents the library's pause function
      }
    };

    // Use capture phase to ensure our listener runs first
    window.addEventListener('keydown', handleKeyDown, { capture: true });

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
    
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <canvas
      ref={canvasRef}
      className="fluid-canvas fixed inset-0 w-full h-full z-0" // changed absolute to fixed for better layering
    />
  );
};

export default FluidCanvas;