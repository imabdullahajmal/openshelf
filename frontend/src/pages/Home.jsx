import React from "react";
import { FaBook, FaVideo, FaFileAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const items = [
  { id: 1, icon: <FaBook />, title: "Books", gradient: "from-orange-600 to-red-600", path: "books" },
  { id: 2, icon: <FaVideo />, title: "Videos", gradient: "from-purple-600 to-pink-600", path: "videos"},
  { id: 3, icon: <FaFileAlt />, title: "Slides", gradient: "from-blue-600 to-indigo-600", path: "slides"},
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-wrap justify-center items-center gap-12 p-10">
      {items.map((item) => (
        <NavLink to={`/${item.path}`}>

        <div key={item.id} className="w-72 lg:w-80 bg-gray-800 rounded-2xl border-4 border-gray-700 shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
          <div className={`h-52 flex items-center justify-center text-white text-7xl bg-gradient-to-bl ${item.gradient} rounded-b-full`}>
            {item.icon}
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold uppercase text-white">{item.title}</h2>
            <p className="text-sm text-gray-400 mt-2">Lorem Ipsum is simply dummy text of the printing industry.</p>
          </div>
        </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Home;
