export default function CTASection() {
  return (
    <section id="cta" className="bg-backgroundLight text-background px-4 py-20 md:py-28">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center fade-in-up">
        <h2 className="text-3xl md:text-4xl font-funnel font-bold mb-4">Anchor is coming soon</h2>
        <p className="text-lg md:text-xl mb-6">Be the first to try it</p>
        <form className="w-full flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="rounded-md bg-primary text-background px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-accent w-full md:w-auto text-base transition"
          />
          <button
            type="submit"
            className="bg-accent text-text px-6 py-2 rounded-md font-semibold shadow hover:bg-secondary transition-colors text-base"
          >
            Join the Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}
