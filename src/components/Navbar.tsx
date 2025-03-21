"use client";
import { IconUser, IconShoppingCart, IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import Search from "./Search";
import Link from "next/link";
import { useCartStore } from "@/stores/cart-store";


const Navbar = () => {
  
  const { items } = useCartStore(); // Get cart items from store
  const cartItemCount = items.reduce((sum, item) => (sum + (item.quantity || 0)), 0)
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <>
      <nav className="bg-white text-black p-2 sticky z-10 top-0 w-full shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-lg font-bold">ZITECH</h1>
              </Link>
              
            </div>

            {/* Desktop Search - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <Search />
            </div>

            {/* Mobile Icons - Hidden on desktop */}
            <div className="md:hidden flex items-center space-x-4">
              <ul className="flex space-x-4"> {/* Added horizontal list for icons */}
                <li>
                  <button onClick={() => setIsSearchVisible(!isSearchVisible)} title="Search">
                    <IconSearch size={24} />
                  </button>
                </li>
                <li>
                <Link href="/cart" className="hover:text-gray-600 relative" title="Cart">
                    <div className="relative">
                      <IconShoppingCart size={24} />
                      {cartItemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                          {cartItemCount}
                        </span>
                      )}
                    </div>
                </Link>
                </li>
                <li>
                  <Link href="/signin" className="hover:text-gray-600" title="Sign In">
                    <IconUser size={24} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6">
                <li>
                <Link 
                      href="/cart" 
                      className="flex items-center gap-x-1.5 hover:text-gray-600  transition-colors"
                    >
                      <div className="relative">
                        <IconShoppingCart size={20} stroke={1.5} />
                        {cartItemCount > 0 && (
                          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                            {cartItemCount}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-sans font-medium">Cart</span>
                 </Link>
                </li>
                <li>
                  <Link href="/account" className="flex items-center gap-x-1 hover:text-gray-600 transition-colors">
                    <IconUser size={20} />
                    <span className="text-sm font-sans font-medium">Account</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
      </nav>

      {/* Mobile Search - Shows below navbar */}
      {isSearchVisible && (
        <div className="md:hidden bg-white p-4">
          <Search />
        </div>
      )}
    </>
  );
};

export default Navbar;
