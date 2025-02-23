import React from "react";
import { FaBook, FaVideo, FaFileAlt } from "react-icons/fa";
import { CardUsage } from "../components/CardUsage";

const items = [
  { id: 1, icon: <FaBook />, title: "Books", gradient: "from-orange-600 to-red-600" },
  { id: 2, icon: <FaVideo />, title: "Videos", gradient: "from-purple-600 to-pink-600" },
  { id: 3, icon: <FaFileAlt />, title: "Slides", gradient: "from-blue-600 to-indigo-600" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-wrap justify-center items-center gap-10 p-10">
      {items.map((item) => (
        <div key={item.id} className="w-56 bg-gray-800 rounded-2xl border-4 border-gray-700 shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
          <div className={`h-40 flex items-center justify-center text-white text-6xl bg-gradient-to-bl ${item.gradient} rounded-b-full`}> 
            {item.icon}
          </div>
          <div className="p-6 text-center">
            <h2 className="text-lg font-semibold uppercase text-white">{item.title}</h2>
            <p className="text-sm text-gray-400 mt-2">Lorem Ipsum is simply dummy text of the printing industry.</p>
            <button className={`mt-4 px-5 py-2 text-white rounded-full bg-gradient-to-l ${item.gradient}`}>{item.title}</button>
          </div>
        </div>
      ))}
      <CardUsage />
    </div>
  );
};

export default Home;
