import { Link, NavLink } from "react-router";
import logo from "../assets/logo.webp";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
const Navbar = () => {
    const [searching, setsearching] = useState(false);
  const links = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Services" },
    { path: "/event", name: "Event" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center py-4 w-11/12 mx-auto">
        <div className="logo flex items-center gap-2">
          <img src={logo} alt="soundstage" className="w-1/4" />
          <Link to="/" className="font-bold md:text-xl">
            SoundStage
          </Link>
        </div>
        <div className="nav_links flex gap-4 items-center ">
          {links?.map((link, index) => (
            <NavLink to={link.path} key={index} className="uppercase font-semibold hover:text-purple-500 transition-colors duration-300">
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="buttons flex relative items-center">
          <Link to="/cart" className="text-2xl">
            <IoCartOutline />
          </Link>
          <div className="h-10 border-r border-gray-600 ml-4"></div>
          <div className="group flex justify-center items-center gap-4 ml-4">
            <FaSearch onClick={() => {setsearching(!searching)}} className="cursor-pointer"/>
            <input type="search" className={`input absolute outline-none w-32 right-0 top-7 ${searching ? "block" : "hidden"}`} />
            <div className="h-10 border-r border-gray-600"></div>
            <CgMenuRight />
            <Link to="/buy-ticket" className="btn bg-linear-90 from-pink-600 to-purple-900 hover:from-purple-900 hover:to-pink-600 transition-colors duration-500 md:text-xl py-8 rounded-3xl">Buy Ticket <FaArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
