import LightBeamsCanvas from '@/components/LightBeamsCanvas';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#f4f4f6]">
      {/* 1. Header / Introduction Section */}
      <header className="w-full border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pt-10 pb-8 md:pt-14 md:pb-10">
          <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-light tracking-[-0.02em] leading-[1.15] text-white text-balance">
            Quiet Light in Motion
          </h1>
          <p className="mt-3.5 max-w-2xl text-[15px] sm:text-base leading-relaxed text-[#a1a1aa] tracking-[0.01em]">
            A calm study in black, charcoal, and silver shaped by slow-moving
            horizontal beams. Each streak gradually brightens as it crosses the
            canvas, lingers in soft focus, and fades back into darkness.
          </p>
        </div>
      </header>

      {/* 2. Main Visual Section */}
      <main
        aria-label="Animated horizontal monochrome light beams"
        className="relative flex-1 w-full min-h-[340px] sm:min-h-[420px] md:min-h-[480px] overflow-hidden"
      >
        <LightBeamsCanvas />
      </main>

      {/* 3. Footer Section */}
      <footer className="w-full border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 py-6 md:py-8">
          <p className="text-sm leading-relaxed text-[#a1a1aa] tracking-[0.01em]">
            Crafted in restrained monochrome—where gentle motion and quiet
            contrast create space to pause.
          </p>
        </div>
      </footer>
    </div>
  );
}
