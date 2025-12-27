import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header className="border-b border-gray-500 sticky top-0 bg-[#1c232a]">
        <Navbar />
            </header>
            <main className="w-11/12 mx-auto">
                {/* Child routes will be rendered here */}
                <Outlet />
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;