export default function LightBeamsCanvas() {
  return (
    <div
      aria-hidden="true"
      className="light-stage absolute inset-0 overflow-hidden select-none pointer-events-none"
    >
      {/* Subtle central ambient charcoal luminescence */}
      <div className="ambient-horizon absolute inset-x-0 top-1/2 -translate-y-1/2 h-48 sm:h-64 md:h-80 bg-[radial-gradient(ellipse_62%_50%_at_50%_50%,rgba(255,255,255,0.065),rgba(161,161,170,0.025)_48%,transparent_78%)] blur-2xl" />

      {/* Depth Layer 1: Wide diffused ambient ribbons */}
      <div className="beam-carrier beam-ribbon-1">
        <div className="beam-ribbon" />
      </div>
      <div className="beam-carrier beam-ribbon-2">
        <div className="beam-ribbon" />
      </div>
      <div className="beam-carrier beam-ribbon-3">
        <div className="beam-ribbon" />
      </div>
      <div className="beam-carrier beam-ribbon-4">
        <div className="beam-ribbon" />
      </div>
      <div className="beam-carrier beam-ribbon-5">
        <div className="beam-ribbon" />
      </div>
      <div className="beam-carrier beam-ribbon-6">
        <div className="beam-ribbon" />
      </div>

      {/* Depth Layer 2: Mid-plane atmospheric silver beams */}
      <div className="beam-carrier beam-mid-1">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-mid-2">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-mid-3">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-mid-4">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-mid-5 hidden sm:block">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-mid-6">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-mid-7">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-mid-8">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-mid-9">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-mid-10">
        <div className="beam-streak" />
      </div>

      {/* Depth Layer 3: Crisp white and silver core filaments */}
      <div className="beam-carrier beam-core-1">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-2">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-3">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-4 hidden sm:block">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-5">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-6 hidden sm:block">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-7">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-8">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-9">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-10">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-11 hidden sm:block">
        <div className="beam-streak" />
      </div>
      <div className="beam-carrier beam-core-12">
        <div className="beam-streak" />
      </div>

      {/* Soft horizontal & vertical edge vignettes so beams emerge and dissolve smoothly */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,transparent_14%,transparent_86%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.72)_0%,transparent_18%,transparent_82%,rgba(5,5,5,0.72)_100%)]" />
    </div>
  );
}
