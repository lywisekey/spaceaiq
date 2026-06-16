"use client";

import { useState, useEffect, useRef } from "react";

export function TelemetryStrip() {
  const [met, setMet] = useState("T+ 00:00:00");
  const [keys, setKeys] = useState("\u2014");
  const keysRef = useRef(8421337);
  const t0 = useRef(Date.now());

  useEffect(() => {
    const tick = () => {
      const s = Math.floor((Date.now() - t0.current) / 1000);
      const hh = String(Math.floor(s / 3600)).padStart(2, "0");
      const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const ss = String(s % 60).padStart(2, "0");
      setMet(`T+ ${hh}:${mm}:${ss}`);

      keysRef.current += Math.floor(Math.random() * 7) + 2;
      setKeys(keysRef.current.toLocaleString("en-US"));
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="absolute left-0 right-0 bottom-0 z-10 border-t border-sq-line bg-sq-void/78 backdrop-blur-[10px]"
      role="presentation"
    >
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {/* MET */}
        <div className="p-[18px_26px] border-r border-b md:border-b-0 border-sq-line font-mono">
          <div className="text-[.62rem] tracking-[.2em] uppercase text-sq-slate mb-[5px] flex items-center">
            <span className="live-dot inline-block w-[7px] h-[7px] rounded-full bg-sq-kapton mr-2 animate-[pulse-dot_2s_infinite]" />
            Mission Elapsed
          </div>
          <div className="text-[1.02rem] text-sq-starlight">{met}</div>
        </div>

        {/* Orbit */}
        <div className="p-[18px_26px] border-b md:border-b-0 md:border-r border-sq-line font-mono">
          <div className="text-[.62rem] tracking-[.2em] uppercase text-sq-slate mb-[5px]">
            Orbit Altitude
          </div>
          <div className="text-[1.02rem] text-sq-starlight">
            550<span className="text-sq-slate text-[.78rem] ml-1">km &middot; LEO</span>
          </div>
        </div>

        {/* Keys */}
        <div className="p-[18px_26px] border-r border-sq-line font-mono">
          <div className="text-[.62rem] tracking-[.2em] uppercase text-sq-slate mb-[5px]">
            PQC Keys Delivered
          </div>
          <div className="text-[1.02rem] text-sq-kapton">{keys}</div>
        </div>

        {/* Root */}
        <div className="p-[18px_26px] font-mono">
          <div className="text-[.62rem] tracking-[.2em] uppercase text-sq-slate mb-[5px]">
            Root of Trust
          </div>
          <div className="text-[1.02rem] text-sq-starlight">
            OISTE &middot;{" "}
            <span className="text-sq-slate text-[.78rem]">Geneva</span>
          </div>
        </div>
      </div>
    </div>
  );
}
