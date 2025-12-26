import { Link, NavLink } from "react-router";
import logo from "../assets/logo.webp";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import NavLinks from "./NavLinks";
const Navbar = () => {
    const [searching, setsearching] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center py-4 w-11/12 mx-auto">
        <div className="logo flex items-center gap-2">
          <img src={logo} alt="soundstage" className="w-1/4" />
          <Link to="/" className="font-bold md:text-xl">
            SoundStage
          </Link>
        </div>
        <IoMenu size={23} className="text-purple-500 flex lg:hidden"/>
        <div className="nav_links gap-4 items-center hidden lg:flex mr-2">
          <NavLinks/>
        </div>
        <div className="buttons relative items-center hidden md:flex">
          <Link to="/cart" className="text-2xl hover:text-purple-500 transition-colors duration-300">
            <IoCartOutline />
          </Link>
          <div className="h-10 border-r border-gray-600 ml-4"></div>
          <div className="group flex justify-center items-center gap-4 ml-4">
            <FaSearch onClick={() => {setsearching(!searching)}} className="cursor-pointer hover:text-purple-500 transition-colors duration-300" size={23}/>
            <input type="search" className={`input absolute outline-none w-32 right-28 top-18 ${searching ? "block" : "hidden"}`} />
            <div className="h-10 border-r border-gray-600"></div>
            <CgMenuRight className="hover:text-purple-500 transition-colors duration-300 cursor-pointer" size={21}/>
            <Link to="/buy-ticket" className="btn bg-linear-90 from-pink-600 to-purple-900 hover:from-purple-900 hover:to-pink-600 transition-colors duration-500 md:text-xl py-8 rounded-3xl">Buy Ticket <FaArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
