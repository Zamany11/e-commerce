"use client"

import { useState } from "react";

export default function NewsLetter() {

   const [email, setEmail] = useState("");

    return(
        <section className="bg-gray-800">
            <div className="px-20 py-5 flex items-center justify-between">
                <div>
                    <button>
                        Sell on Elimeli
                    </button>
                </div>

                <div>
                    <span>New To Elimeli?</span>
                    <p>Subscribe to our Newsletter to get updates on best offers!</p>
                    <form className="max-w-md mx-4 flex-1">
      <div className="relative group">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Search products here"
          className="w-full pl-4 pr-4 py-2 rounded-2xl border border-gray-300 focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600 outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-400"
        />
        <button
          type="submit"
          title="Search"
          className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-white bg-orange-500 rounded-r-2xl hover:bg-orange-600 "
        >
          Subscribe
        </button>
      </div>
    </form>
                </div>

                <div>
                    Affiliate
                </div>
            </div>
        </section>
    )
}