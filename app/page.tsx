import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CaptureSection from "../components/CaptureSection";
import FocusSection from "../components/FocusSection";
import StayOnTrackSection from "../components/StayOnTrackSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* <CaptureSection /> */}
        {/* <FocusSection /> */}
        {/* <StayOnTrackSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
