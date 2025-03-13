"use client";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (query.trim()) {
      // Navigate to search results page with the query
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="max-w-md mx-4 flex-1">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products here"
          className="w-full pl-4 pr-4 py-2 rounded-2xl border border-gray-300 focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600 outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-400"
        />
        <button
          type="submit"
          title="Search"
          className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-white bg-orange-500 rounded-r-2xl hover:bg-orange-600 "
        >
          <IconSearch className="w-5 h-5 text-gray-200 group-focus-within:text-gray-200 transition-colors" />
        </button>
      </div>
    </form>
  );
};

export default Search;

