"use client";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Search query:", query);
  };

  return (
    <form onSubmit={handleSearch} className="max-w-md mx-4 flex-1">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IconSearch className="w-5 h-5 text-gray-400 group-focus-within:text-yellow-600 transition-colors" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products here"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-400"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-white bg-yellow-500 rounded-r-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;

