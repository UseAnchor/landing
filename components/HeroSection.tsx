export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center text-left bg-backgroundLight text-background px-4 fade-in-up overflow-hidden">
      {/* Blurred blue circles */}
      <div className="absolute left-1/4 top-1/5 w-72 h-72 bg-accent opacity-50 rounded-full blur-3xl pointer-events-none" style={{zIndex:1}}></div>
      <div className="absolute left-2/3 top-1/2 w-56 h-56 bg-accent opacity-40 rounded-full blur-2xl pointer-events-none" style={{zIndex:1}}></div>
      <div className="relative z-10 max-w-2xl py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-funnel font-bold mb-6">
          The Last Productivity Tool You'll <i><u>Ever</u></i> Need
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          Built by and for neurodivergent minds
        </p>
        <a href="#cta" className="inline-block bg-accent text-text px-8 py-3 rounded-xl font-semibold shadow hover:bg-secondary transition-colors text-lg">
          Join the Waitlist
        </a>
      </div>
    </section>
  );
}
