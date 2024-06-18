import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:px-32">
      <div className="bg-white border-b-4 border-blue-500">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-between items-center my-2 md:my-0">
            <img
              src="/src/assets/images/logoNav.png"
              alt="Blink Sport"
              className="h-16 mr-12 md:my-5 md:mr-0 md:h-20"
            />
            <Link
              to="/contact"
              className="text-gray-800 font-semibold text-sm md:ml-4"
            >
              NOUS CONTACTER
            </Link>
          </div>
          <a href="https://blinksport-app.s3.eu-west-3.amazonaws.com/BlinkSport.apk">
            <button className="text-xs md:text-base border border-orange-500 rounded-full text-orange-500 font-semibold py-2 px-4 mb-5 md:my-0 hover:bg-orange-500 hover:text-white transition duration-300">
              TÉLÉCHARGER L'APPLICATION
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
