'use client';

import { useEffect, useRef } from 'react';
import webglFluid from 'webgl-fluid';

const FluidCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Initialize the fluid simulation
      // You can play with these config values to get different effects
      webglFluid(canvas, {
        IMPRESS: 0.8,
        PRESSURE: 0.8,
        CURL: 10, // Creates more detailed, smaller swirls
        SPLAT_RADIUS: 0.3, // The radius of the "splat" when you move the mouse
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        BACK_COLOR: { r: 255, g: 255, b: 255 }, // Match your page's background
        TRANSPARENT: false, // Set to true if you want to see content behind it
        DENSITY_DISSIPATION: 1.2, // How quickly the "ink" fades
        VELOCITY_DISSIPATION: 0.3, // How quickly the motion settles
        BLOOM: false,
        SUNRAYS: false,
      });
    }

    // No cleanup function is provided by the library,
    // and it attaches listeners to the window, so it will persist.
  }, []); // The empty dependency array ensures this runs only once on mount.

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0" 
    />
  );
};

export default FluidCanvas;