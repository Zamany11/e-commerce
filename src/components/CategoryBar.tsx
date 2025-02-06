"use client"

import { useState } from 'react';

export default function CategoryBar() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(0);
    const categories = ['Featured', 'Accessories', 'Iphones', 'Samsung', 'Techno', 'Infinix', 'Itel', 'Redmi'];

    return (
        <section className="bg-red-500">
            <div className="container mx-auto">
                <ul className="flex items-center justify-between p-5">
                    {categories.map((category, index) => (
                        <li
                            key={category}
                            className={`font-bold hover:text-slate-100 cursor-pointer transition-colors ${
                                selectedCategory === index ? 'text-white' : 'text-gray-200'
                            }`}
                            style={{ 
                                borderBottom: selectedCategory === index ? '2px solid white' : 'none',
                                paddingBottom: '4px'
                            }}
                            onClick={() => setSelectedCategory(index)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
