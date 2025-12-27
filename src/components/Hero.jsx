import { useEffect, useState } from "react";
import HeroSlides from "./HeroSlides";

const Hero = () => {
  const [heroData, setHeroData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    fetch("/heroData.json")
      .then((response) => response.json())
      .then((data) => setHeroData(data))
      .catch((error) => console.error("Error fetching hero data:", error));
  }, []);
  useEffect(() => {
    if (isHovered || heroData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroData, isHovered]);
  return (
    <div className="hero_container overflow-hidden relative w-full" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="absolute flex justify-center w-full z-10 lg:flex-col bottom-0 lg:bottom-1/2 items-end top-1/2">
        {heroData.map((_, index) => (
          <span
            key={index}
            className={`dot mx-1 cursor-pointer text-3xl ${
              index === currentIndex ? "text-white" : "text-gray-500"
            }`} onClick={() => setCurrentIndex(index)}
          >
            ●
          </span>
        ))}
      </div>
      <div
        className="hero_slider flex w-full transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {heroData?.map((data, index) => (
          <div className="hero_slide shrink-0 min-w-full" key={index}>
            <HeroSlides heroData={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
