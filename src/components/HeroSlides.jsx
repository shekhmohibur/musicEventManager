import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
const HeroSlides = ({ heroData }) => {
  const {
    title,
    description,
    category,
    time,
    date,
    buttonText,
    location,
    image,
  } = heroData;
  return (
    <div className="hero_slides flex justify-around items-center py-20">
      <div className="left_side flex flex-col gap-6 max-w-lg">
        <p className="text-lg">{category}</p>
        <h2 className="uppercase font-bold text-5xl">{title}</h2>
        <p className="text-white">{description}</p>
        <div className="flex gap-6 flex-col md:flex-row text-white">
          <span className="mr-4">📍 {location}</span>
          <span>
            🕒 {time} 📅 {date}
          </span>
        </div>
        <div>
          <Link
            to="/buy-ticket"
            className="btn bg-linear-90 from-pink-600 to-purple-900 hover:from-purple-900 hover:to-pink-600 transition-colors duration-500 md:text-xl py-8 rounded-3xl capitalize"
          >
            {buttonText} <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="right_side hidden lg:flex rounded-2xl overflow-hidden border-2 border-red-300/20">
        <img src={image} alt="hero image" className="pointer-events-none"/>
      </div>
    </div>
  );
};

export default HeroSlides;
