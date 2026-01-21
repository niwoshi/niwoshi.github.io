import { useEffect } from "react";
import { GridBackground } from "@/app/components/GridBackground";
import { CircuitPattern } from "@/app/components/CircuitPattern";
import { HeroSection } from "@/app/components/HeroSection";
import { InterestsSection } from "@/app/components/InterestsSection";
import { FollowSection } from "@/app/components/FollowSection";
import { RecentSection } from "@/app/components/RecentSection";
import { Footer } from "@/app/components/Footer";

export default function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white relative overflow-hidden font-['Inter']">
      {/* Background layers */}
      <GridBackground />
      <CircuitPattern />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <InterestsSection />
        <FollowSection />
        <RecentSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
