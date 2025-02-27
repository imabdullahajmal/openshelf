import React from "react";
import Header from "../components/Header"; // Assuming you store Header in components folder

const Videos = () => {
    
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="p-10 text-center">
                <h2 className="text-3xl font-bold">Videos</h2>
                <p className="text-gray-400 mt-2">Browse and watch educational videos.</p>
                <input type="file" onChange={handleFileUpload} className="text-white" />
                {/* Video content will go here */}
            </div>
        </div>
    );
};

export default Videos;
