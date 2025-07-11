// app/FluidCanvas.tsx
'use client';

import { useEffect, useRef } from 'react';
import webglFluid from 'webgl-fluid';

const FluidCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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

      // make the canvas opaque white
      TRANSPARENT: false,
      BACKGROUND_COLOR: { r: 1, g: 1, b: 1 },

      // lighter bloom & no sunrays for performance
      BLOOM: true,
      BLOOM_ITERATIONS: 4,
      BLOOM_RESOLUTION: 128,
      SUNRAYS: false,

      // downsample simulation textures
      TEXTURE_DOWNSAMPLE: 2,
      DYE_RESOLUTION: 512,
      VELOCITY_RESOLUTION: 512,

      // smoother dissipation
      DENSITY_DISSIPATION: 1.2,
      VELOCITY_DISSIPATION: 0.5,
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fluid-canvas absolute inset-0 w-full h-full z-0"
    />
  );
};

export default FluidCanvas;
