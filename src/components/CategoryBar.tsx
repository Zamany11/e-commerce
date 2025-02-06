"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Featured', 'Accessories', 'Iphones', 'Samsung', 'Techno', 'Infinix', 'Itel', 'Redmi'];
const mobileMainCategories = ['Featured', 'Smartphones', 'Accessories'];
const smartphoneSubcategories = ['Iphones', 'Samsung', 'Techno', 'Infinix', 'Itel', 'Redmi'];

export default function CategoryBar() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => window.innerWidth < 768;
        setIsMobile(checkMobile());
        window.addEventListener('resize', () => setIsMobile(checkMobile()));
        return () => window.removeEventListener('resize', () => setIsMobile(checkMobile()));
    }, []);

    const handleCategorySelect = (index: number) => {
        setSelectedCategory(index);
        if (isMobile && index === 1) {
            setIsDropdownOpen(!isDropdownOpen);
        } else {
            setIsDropdownOpen(false);
        }
    };

    return (
        <section className="  bg-red-500">
            <div className="container mx-auto">
                {/* Desktop View - hidden on mobile */}
                <ul className="hidden md:flex items-center justify-between p-5">
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
                            onClick={() => handleCategorySelect(index)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>

                {/* Mobile View - hidden on desktop */}
                <div className="md:hidden relative p-4">
                    <ul className="flex justify-between space-x-4">
                        {mobileMainCategories.map((category, index) => (
                            <li 
                                key={category}
                                className="relative"
                            >
                                <div
                                    className={`font-bold hover:text-slate-100 cursor-pointer transition-colors ${
                                        selectedCategory === index ? 'text-white' : 'text-gray-200'
                                    } ${category === 'Smartphones' ? 'pr-2' : ''}`}
                                    style={{ 
                                        borderBottom: selectedCategory === index ? '2px solid white' : 'none',
                                        paddingBottom: '4px'
                                    }}
                                    onClick={() => handleCategorySelect(index)}
                                >
                                    {category}
                                </div>
                                
                                {category === 'Smartphones' && (
                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 bg-red-500 w-full min-w-[200px] rounded-b-md shadow-lg z-10"
                                            >
                                                <div className="grid grid-cols-2 gap-4 p-3">
                                                    {smartphoneSubcategories.map((subcat) => {
                                                        const originalIndex = categories.indexOf(subcat);
                                                        return (
                                                            <motion.div
                                                                key={subcat}
                                                                className="text-center"
                                                            >
                                                                <div
                                                                    className={`font-bold hover:text-slate-100 cursor-pointer transition-colors ${
                                                                        selectedCategory === originalIndex ? 'text-white' : 'text-gray-200'
                                                                    }`}
                                                                    onClick={() => setSelectedCategory(originalIndex)}
                                                                >
                                                                    {subcat}
                                                                </div>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
