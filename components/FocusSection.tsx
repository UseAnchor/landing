export default function FocusSection() {
  return (
    <section className="bg-backgroundLight text-background px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="md:w-1/2 flex justify-center slide-in-left">
          <img src="/timer-mockup.png" alt="Timer popup mockup" className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm bg-secondary" />
        </div>
        <div className="md:w-1/2 slide-in-right">
          <h2 className="text-3xl md:text-4xl font-funnel font-bold mb-4">Start Focusing</h2>
          <p className="text-lg md:text-xl mb-6">
            Anchor shows a floating timer and progress bar while you work — always visible, always encouraging.
          </p>
        </div>
      </div>
    </section>
  );
}
