export default function StayOnTrackSection() {
  return (
    <section className="bg-background text-text px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center fade-in-up">
        <h2 className="text-3xl md:text-4xl font-funnel font-bold mb-4">Stay on Track</h2>
        <p className="text-lg md:text-xl mb-8">
          Visual nudges keep you anchored to the task at hand. Once you’re done, take a short break and reset.
        </p>
        <img src="/break-mockup.png" alt="Break screen or confetti illustration" className="rounded-xl shadow-lg w-full max-w-xs md:max-w-md bg-primary mb-6" />
        {/* Example checkmark pulse effect */}
        <div className="flex items-center justify-center">
          <span className="inline-block w-12 h-12 rounded-full bg-background flex items-center justify-center animate-pulse">
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 11l4 4L15 7" stroke="#e4e2dd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
      </div>
    </section>
  );
}
