"use client"

import { useState } from "react";

export default function NewsLetter() {

   const [email, setEmail] = useState("");

    return(
        <section className="bg-gray-800">
            <div className="px-8 md:px-20 py-5 flex items-center justify-between">
                <div className="hidden md:flex font-bold">
                    <h1>ELIMELI</h1>
                </div>

                <div>
                    <span>New To Elimeli?</span>
                    <p>Subscribe to our Newsletter to get updates on best offers!</p>
                    <form className="max-w-md flex-1">
      <div className="relative group">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full pl-4 pr-4 py-2 border border-gray-300 focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600 outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-400"
        />
        <button
          type="submit"
          title="Search"
          className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-white bg-orange-500  hover:bg-orange-600 "
        >
          Subscribe
        </button>
      </div>
    </form>
                </div>

                <div className="hidden md:flex font-bold">
                    Become An Affiliate
                </div>
            </div>
        </section>
    )
}