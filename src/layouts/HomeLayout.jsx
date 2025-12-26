import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header className="border-b border-gray-500 sticky top-0 ">
        <Navbar />
            </header>
            <main></main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;