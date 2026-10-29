"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ExternalLink, 
  RotateCw, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  MousePointerClick, 
  Monitor, 
  ArrowUpRight,
  ShieldCheck,
  Package,
  Layers,
  SlidersHorizontal,
  FileSpreadsheet
} from "lucide-react";

interface CromoneShowcaseProps {
  className?: string;
}

export default function CromoneShowcase({ className = "" }: CromoneShowcaseProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInteractive, setIsInteractive] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const reloadIframe = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Ambient background glow tailored for Cromone Green accent */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-blue-500/20 rounded-3xl blur-2xl opacity-60 -z-10 pointer-events-none" />

      <div className="glass-card rounded-3xl p-6 md:p-8 bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 transition-all duration-500">
        
        {/* Header Ribbon / Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Production Showcase
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-400" />
              Client B2B Project
            </span>
          </div>

          <a
            id="cromone-visit-top-link"
            href="https://cromone.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-emerald-200 border border-emerald-500/30 text-xs font-semibold transition-all hover:scale-105 active:scale-95 group"
          >
            <span>cromone.com</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Main Content Grid: Info & Live Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Overview & Specs (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 overflow-hidden relative">
                  <Image 
                    src="/cromone-logo.png" 
                    alt="Cromone Greens Logo" 
                    width={32} 
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Cromone Greens
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">
                    Electrical Components & Solar Hardware Supplier
                  </p>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mt-4">
                Designed, engineered, and deployed a production B2B inventory catalog web application for Cromone Greens. 
                Built to digitize wholesale electrical components procurement with structured technical specifications, 
                instant faceted search, and an integrated quotation pipeline.
              </p>
            </div>

            {/* Key Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Package size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">47+ Live Products</h4>
                  <p className="text-[11px] text-white/50">ACDB/DCDB, glands & solar parts</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <SlidersHorizontal size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Faceted Filtering</h4>
                  <p className="text-[11px] text-white/50">Sub-second category lookup</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <FileSpreadsheet size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">B2B Quote (RFQ)</h4>
                  <p className="text-[11px] text-white/50">Direct inquiry & quote cart</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                  <Globe size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Cloud Architecture</h4>
                  <p className="text-[11px] text-white/50">Vercel, Render & Cloudinary</p>
                </div>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold block mb-2">
                Tech Stack & Infrastructure
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["React", "TypeScript", "Tailwind CSS", "Node.js", "REST API", "Vercel", "Render", "Cloudinary"].map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="cromone-visit-btn"
                href="https://cromone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-semibold text-sm rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Visit Live Website</span>
                <ExternalLink size={16} />
              </a>

              <button
                id="cromone-toggle-interactive-btn"
                type="button"
                onClick={() => setIsInteractive((prev) => !prev)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-xl border transition-all ${
                  isInteractive
                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-md"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <MousePointerClick size={15} />
                <span>{isInteractive ? "Disable Interaction" : "Click to Interact"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live TV / Mini Monitor Window (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* The Window Frame */}
            <div className="rounded-2xl md:rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col group">
              
              {/* Window Titlebar / Chrome */}
              <div className="px-4 py-3 bg-white/[0.06] border-b border-white/10 flex items-center justify-between gap-3 select-none">
                
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600 shadow-xs" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600 shadow-xs" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600 shadow-xs" />
                  <span className="hidden sm:inline-block text-[11px] font-medium text-white/40 ml-2 tracking-wide flex items-center gap-1.5">
                    <Monitor size={12} className="text-white/40" />
                    Live Web Monitor
                  </span>
                </div>

                {/* URL Bar */}
                <div className="flex-1 max-w-xs mx-auto">
                  <div className="px-3 py-1 bg-black/40 border border-white/10 rounded-full flex items-center justify-center gap-2 text-xs text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="truncate font-mono text-[11px] text-white/80">https://cromone.com</span>
                  </div>
                </div>

                {/* Window Actions: Reload & External Link */}
                <div className="flex items-center gap-1">
                  <button
                    id="cromone-reload-btn"
                    type="button"
                    onClick={reloadIframe}
                    title="Reload live preview"
                    className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <RotateCw size={14} className={isLoading ? "animate-spin text-emerald-400" : ""} />
                  </button>

                  <a
                    id="cromone-popout-btn"
                    href="https://cromone.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open website in new window"
                    className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* The Display Screen Area */}
              <div className="relative w-full h-[360px] md:h-[430px] bg-neutral-900/90 overflow-hidden">
                
                {/* Loading Skeleton */}
                {isLoading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950 p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 p-2 animate-pulse">
                        <Image 
                          src="/cromone-logo.png" 
                          alt="Cromone Greens" 
                          width={48} 
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                        <RotateCw size={10} className="animate-spin" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Connecting to cromone.com</p>
                      <p className="text-xs text-white/40 mt-1">Streaming live inventory catalog...</p>
                    </div>
                  </div>
                )}

                {/* The Embedded Live Iframe */}
                <iframe
                  id="cromone-live-iframe"
                  key={iframeKey}
                  ref={iframeRef}
                  src="https://cromone.com"
                  title="Cromone Greens Live Website Preview"
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                  className={`w-full h-full border-0 transition-opacity duration-700 bg-neutral-950 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  } ${isInteractive ? "pointer-events-auto" : "pointer-events-none"}`}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />

                {/* Non-interactive Overlay to prevent scroll hijacking when browsing portfolio */}
                {!isInteractive && !isLoading && (
                  <div 
                    onClick={() => setIsInteractive(true)}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-5 bg-gradient-to-t from-black/70 via-transparent to-transparent cursor-pointer transition-opacity group/overlay hover:bg-black/30"
                  >
                    <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-2 shadow-xl transform transition-transform group-hover/overlay:scale-105">
                      <MousePointerClick size={14} className="text-emerald-400 animate-bounce" />
                      <span>Click window to interact live</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Window Footer Status Bar */}
              <div className="px-4 py-2 bg-neutral-950 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Status: Deployed & Healthy</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>SSL Encrypted</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">Vercel Edge CDN</span>
                </div>
              </div>

            </div>

            {/* Sub-caption below window */}
            <div className="mt-3 flex items-center justify-between px-1 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Sparkles size={12} className="text-emerald-400" />
                Live interactive embedded frame
              </span>
              <span>{isInteractive ? "Interaction enabled (click outside or toggle to lock)" : "Scroll-safe preview mode"}</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
