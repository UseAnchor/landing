export default function CaptureSection() {
  return (
    <section className="bg-background text-text px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="md:w-1/2 slide-in-left">
          <h2 className="text-3xl md:text-4xl font-funnel font-bold mb-4">Capture Your Tasks</h2>
          <p className="text-lg md:text-xl mb-6">
            Stop juggling everything in your head. Write your to-dos and assign a quick time estimate. Nothing more.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center slide-in-right">
          <img src="/task-mockup.png" alt="Task input UI mockup" className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm bg-primary" />
        </div>
      </div>
    </section>
  );
}
