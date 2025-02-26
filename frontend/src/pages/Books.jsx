import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const booksData = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
  { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
];

const Books = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? book.genre === filter : true)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Books Collection</h1>
      
      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-3 right-4 text-gray-400" />
        </div>
        <select
          className="px-4 py-2 bg-gray-800 text-white rounded-lg outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="Classic">Classic</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-400">by {book.author}</p>
            <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-600 rounded-full">
              {book.genre}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
