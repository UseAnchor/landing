import Image from 'next/image';
import { ContainerScroll } from './ui/container-scroll-animation'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-backgroundLight text-background px-4 fade-in-up overflow-hidden">
      {/* Blurred blue circles */}
      <div className="absolute left-1/4 top-1/5 w-72 h-72 bg-accent opacity-50 rounded-full blur-3xl pointer-events-none" style={{ zIndex: 1 }}></div>
      <div className="absolute left-2/3 top-1/2 w-56 h-56 bg-accent opacity-40 rounded-full blur-2xl pointer-events-none" style={{ zIndex: 1 }}></div>
      
      <ContainerScroll
        titleComponent={
          <div className="relative z-10 max-w-4xl text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-funnel font-bold mb-6">
              The Last Productivity Tool You'll <i><u>Ever</u></i> Need
            </h1>
            <p className="text-2xl md:text-3xl font-medium mb-8">
              Built by and for neurodivergent minds
            </p>
            <a href="https://tally.so/r/wMgxaX" className="inline-block bg-accent text-text px-8 py-3 rounded-xl font-semibold shadow hover:bg-secondary transition-colors text-lg">
              Join the Waitlist
            </a>
          </div>
        }
      >
        <Image 
          src="/hero.png" 
          alt="Anchor Productivity App" 
          width={1200} 
          height={800} 
          className="rounded-xl shadow-2xl"
        />
      </ContainerScroll>
    </section>
  );
}
