import AboutUs from "../pages/AboutUs";
const Sidebar2 = ({ sidebarOpen }) => {
  return (
    <div>
      <div>
        <div
          onClick={sidebarOpen}
          className="fixed bg-black/20 z-10 w-screen min-h-screen cursor-pointer"
        ></div>
        <div className="bg-black/20 fixed z-50 min-h-screen w-52 pl-3 pt-4">
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
