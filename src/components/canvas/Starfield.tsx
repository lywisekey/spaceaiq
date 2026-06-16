"use client";

import { useRef, useEffect, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  tw: number;
  sp: number;
}

interface Sat {
  cx: number;
  cy: number;
  R: number;
  a: number;
  v: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const satsRef = useRef<Sat[]>([]);
  const animRef = useRef<number>(0);
  const reducedRef = useRef(false);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(devicePixelRatio, 2);
    const W = (canvas.width = canvas.offsetWidth * dpr);
    const H = (canvas.height = canvas.offsetHeight * dpr);

    starsRef.current = Array.from(
      { length: Math.floor((W * H) / 16000) },
      () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.3,
        tw: Math.random() * Math.PI * 2,
        sp: 0.4 + Math.random() * 1.2,
      })
    );

    const cx = W / 2;
    const cy = H + W * 0.46;
    satsRef.current = [0, 1, 2, 3, 4].map((i) => ({
      cx,
      cy,
      R: W * 0.46 + H * 0.18 + i * (H * 0.075),
      a: Math.random() * Math.PI,
      v: (0.00018 + Math.random() * 0.0001) * (dpr > 1 ? 1 : 1.4),
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    resize();
    window.addEventListener("resize", resize);

    const frame = (t: number) => {
      const W = canvas.width;
      const H = canvas.height;
      const dpr = Math.min(devicePixelRatio, 2);
      ctx.clearRect(0, 0, W, H);

      // Stars
      for (const s of starsRef.current) {
        const a =
          0.35 + 0.55 * Math.abs(Math.sin(s.tw + t * 0.001 * s.sp));
        ctx.globalAlpha = a;
        ctx.fillStyle = "#C9D4F0";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 7);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Orbits + satellites
      for (const o of satsRef.current) {
        ctx.strokeStyle = "rgba(159,216,234,.07)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(o.cx, o.cy, o.R, Math.PI * 1.15, Math.PI * 1.85);
        ctx.stroke();

        if (!reducedRef.current) o.a += o.v * 16;
        const ang =
          Math.PI * 1.15 +
          ((Math.sin(o.a) + 1) / 2) * (Math.PI * 0.7);
        const x = o.cx + Math.cos(ang) * o.R;
        const y = o.cy + Math.sin(ang) * o.R;

        // Glow
        const g = ctx.createRadialGradient(x, y, 0, x, y, 14 * dpr);
        g.addColorStop(0, "rgba(245,201,122,.9)");
        g.addColorStop(1, "rgba(245,201,122,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 14 * dpr, 0, 7);
        ctx.fill();

        ctx.fillStyle = "#F5C97A";
        ctx.beginPath();
        ctx.arc(x, y, 2.2 * dpr, 0, 7);
        ctx.fill();
      }

      if (!reducedRef.current) {
        animRef.current = requestAnimationFrame(frame);
      }
    };

    animRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      id="sky"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
}
