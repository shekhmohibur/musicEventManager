import React from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
      
      <div className="w-full text-center flex flex-col justify-center fixed min-h-screen pointer-events-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-400">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
