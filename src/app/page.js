import HeroSection from "./components/sections/hero";
import TechStackSection from "./components/sections/tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col container min-h-screen mx-auto px-6 md:px-10 md:py-4">
      <div className="container mt-8 mx-auto px-6 md:px-10 py-4">
        <HeroSection />
        <TechStackSection/>
      </div>
    </div>
  )
}
