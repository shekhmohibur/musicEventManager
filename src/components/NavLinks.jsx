import { NavLink } from "react-router";

const NavLinks = () => {
      const links = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Services" },
    { path: "/event", name: "Event" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];
    return (
        <div className="nav_links gap-4 items-center hidden lg:flex mr-2">
            {links?.map((link, index) => (
            <NavLink to={link.path} key={index} className="uppercase font-semibold hover:text-purple-500 transition-colors duration-300">
              {link.name}
            </NavLink>
          ))}
        </div>
    );
};

export default NavLinks;