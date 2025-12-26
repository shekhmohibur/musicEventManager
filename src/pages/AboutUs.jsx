import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="mb-2 ">
        Welcome to SoundStage! We are dedicated to bringing you the best music
        event experiences.
      </p>
      <p className="">
        Our mission is to connect music lovers with unforgettable live
        performances.
      </p>
      <Link
        to="/buy-ticket"
        className="btn bg-linear-90 from-pink-600 to-purple-900 hover:from-purple-900 hover:to-pink-600 transition-colors duration-500 md:text-xl py-8 rounded-3xl"
      >
        Buy Ticket <FaArrowRight />
      </Link>
    </div>
  );
};

export default AboutUs;
