import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="text-white hover:text-gray-400 transition"
      >
        <FaArrowLeft size={20} />
      </button>
      <h1 className="text-xl font-semibold flex-1 text-center">Openshelf</h1>
      <div className="w-6"></div> {/* Spacer to balance the layout */}
    </header>
  );
};

export default Header;
