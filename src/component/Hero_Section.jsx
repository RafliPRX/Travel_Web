import Hero from "./Hero";
import "./hero-section.css";
import Header from "./Header";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Header/>
      <Hero />
    </div>
  );
};

export default HeroSection;