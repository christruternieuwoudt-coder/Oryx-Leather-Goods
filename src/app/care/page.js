export default function LeatherCarePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-2 border-b border-stone-200 pb-8">
        <h1 className="font-serif text-4xl text-leather-dark">Leather Care Guide</h1>
        <p className="text-stone-500 text-sm max-w-md mx-auto">Ensuring structural longevity and deep patina formation across decades.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
        <div className="bg-white p-6 border border-stone-200 space-y-3">
          <h3 className="font-serif text-lg font-semibold text-leather-dark">1. Surface Cleaning</h3>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Wipe with a clean, slightly damp cotton layer periodically. Do not deploy chemical detergents, heavy solvents, or alcohol blends which structurally degrade protective conditioning layers.
          </p>
        </div>
        <div className="bg-white p-6 border border-stone-200 space-y-3">
          <h3 className="font-serif text-lg font-semibold text-leather-dark">2. Conditioning Frequency</h3>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Apply a small dollop of premium organic beeswax cream conditioner every 6–12 months. Massage smoothly in soft circular paths to restore hydration properties.
          </p>
        </div>
        <div className="bg-white p-6 border border-stone-200 space-y-3">
          <h3 className="font-serif text-lg font-semibold text-leather-dark">3. Hydration & Water Management</h3>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            If exposed to liquid moisture, pat dry completely immediately using standard soft paper cloths. Allow natural air dry environments. Never apply intense external electrical hair dryer heat.
          </p>
        </div>
        <div className="bg-white p-6 border border-stone-200 space-y-3">
          <h3 className="font-serif text-lg font-semibold text-leather-dark">4. Cultivating True Patina</h3>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Vegetable-tanned compounds continuously morph based on contact with your skin oils and natural daylight tracking. This creates a customized deep amber character that is completely unique to you.
          </p>
        </div>
      </div>
    </div>
  );
}
