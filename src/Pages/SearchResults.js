import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../App.css";
import "../CSS/output.css";

const SearchResults = ({ cards }) => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("query");

  // Filter cards based on search term
  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="text-red-600 hover:text-red-800 mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h2 className="text-2xl font-bold mb-4">
            Search Results for: "{searchTerm}"
          </h2>
        </div>

        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.excerpt}</p>
                  <Link
                    to={card.link}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-xl mb-2">
              No search results found for "{searchTerm}".
            </p>
            <p className="text-gray-600 mb-4">
              Try searching for something else!
            </p>
            <Link
              to="/"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
