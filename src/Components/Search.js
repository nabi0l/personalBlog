// src/Pages/SearchResults.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../CSS/output.css";

const Search = ({ cards }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission

    if (searchTerm.trim() === "") {
      return; // Don't search if the term is empty
    }

    // Navigate to the search results page with the search term as a query parameter
    navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#212529] mb-4">
          Search Blog Posts
        </h1>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Try: 'coding', 'react', 'portfolio'..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition-colors"
          >
            Search
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-2">
          Search by title or content.
        </p>
      </div>
    </div>
  );
};

export default Search;
