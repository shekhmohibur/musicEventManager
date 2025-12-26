import AboutUs from "../pages/AboutUs";
import NavLinks from "./NavLinks";
const Sidebar = ({ sidebarOpen}) => {
  return (
    <div>
      <div
        onClick={sidebarOpen}
        className="fixed bg-black/20 w-screen min-h-screen cursor-pointer"
      ></div>{" "}
      <div className="bg-black/20 fixed z-50 min-h-screen w-52 pl-3 pt-4">
        <NavLinks />
      </div>
    </div>
  );
};

export default Sidebar;
