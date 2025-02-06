"use client";
import { IconHome, IconUser, IconShoppingCart, IconSearch, IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";
import Search from "./Search";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <>
      <nav className="bg-white text-black p-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-lg font-bold">ELIMELI</h1>
            </div>

            {/* Desktop Search - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <Search />
            </div>

            {/* Mobile Icons - Hidden on desktop */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setIsSearchVisible(!isSearchVisible)} title="Toggle Search">
                <IconSearch size={24} />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6">
                <li>
                  <a href="/" className="flex items-center gap-x-1.5 hover:text-gray-600 hover:border-2 hover:border-orange-500 hover:rounded-lg hover:p-2 hover:bg-orange-400 transition-colors">
                    <IconHome size={20} />
                    <span className="text-sm">Home</span>
                  </a>
                </li>
                <li>
                  <a href="/cart" className="flex items-center gap-x-1.5 hover:text-gray-600 hover:border-2 hover:border-orange-500 hover:rounded-lg hover:p-2 hover:bg-orange-400 transition-colors">
                    <IconShoppingCart size={20} stroke={1.5} />
                    <span className="text-sm">Cart</span>
                  </a>
                </li>
                <li>
                  <a href="/signin" className="flex items-center gap-x-1.5 hover:text-gray-600 hover:border-2 hover:border-orange-500 hover:rounded-lg hover:p-2 hover:bg-orange-400 transition-colors">
                    <IconUser size={20} />
                    <span className="text-sm">SignIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-700 p-4">
            <ul className="space-y-4">
              <li>
                <a href="/" className="flex items-center gap-x-2 text-lg">
                  <IconHome size={24} />
                  Home
                </a>
              </li>
              <li>
                <a href="/cart" className="flex items-center gap-x-2 text-lg">
                  <IconShoppingCart size={24} />
                  Cart
                </a>
              </li>
              <li>
                <a href="/signin" className="flex items-center gap-x-2 text-lg">
                  <IconUser size={24} />
                  SignIn
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Mobile Search - Shows below navbar */}
      {isSearchVisible && (
        <div className="md:hidden bg-gray-800 p-4">
          <Search />
        </div>
      )}
    </>
  );
};

export default Navbar;
