"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ['Featured', 'Accessories', 'Iphones', 'Samsung', 'Techno', 'Infinix', 'Itel', 'Redmi'];
const mobileMainCategories = ['Featured', 'Smartphones', 'Accessories'];
const smartphoneSubcategories = ['Iphones', 'Samsung', 'Techno', 'Infinix', 'Itel', 'Redmi'];

interface CategoryBarProps {
    onCategoryChange: (category: string) => void;
}

export default function CategoryBar({ onCategoryChange }: CategoryBarProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('Featured');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   

    const handleMobileCategorySelect = (category: string) => {
        if (category === 'Smartphones') {
            setIsDropdownOpen(!isDropdownOpen);
        } else {
            setSelectedCategory(category);
            onCategoryChange(category);
            setIsDropdownOpen(false);
        }
    };

    const handleSubcategorySelect = (subcategory: string) => {
        setSelectedCategory(subcategory);
        onCategoryChange(subcategory);
        setIsDropdownOpen(false);
    };

    return (
        <section className="bg-orange-500 container mx-auto md:mt-5 md:rounded-sm sticky w-full z-10 top-16 md:static">
            <div className="container mx-auto md:px-5">
                {/* Desktop View */}
                <ul className="hidden md:flex items-center justify-between py-5">
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`font-bold hover:text-slate-100 cursor-pointer transition-colors ${
                                selectedCategory === category ? 'text-white' : 'text-orange-100'
                            }`}
                            style={{ 
                                borderBottom: selectedCategory === category ? '2px solid white' : 'none',
                                paddingBottom: '4px'
                            }}
                            onClick={() => {
                                setSelectedCategory(category);
                                onCategoryChange(category);
                            }}
                        >
                            {category}
                        </li>
                    ))}
                </ul>

                {/* Mobile View */}
                <div className="md:hidden relative p-4">
                    <ul className="flex justify-between space-x-4">
                        {mobileMainCategories.map((category) => (
                            <li key={category} className="relative">
                                <div
                                    className={`font-bold hover:text-slate-100 cursor-pointer transition-colors ${
                                        selectedCategory === category ? 'text-white' : 'text-orange-100'
                                    } ${category === 'Smartphones' ? 'pr-2' : ''}`}
                                    style={{ 
                                        borderBottom: selectedCategory === category ? '2px solid white' : 'none',
                                        paddingBottom: '4px'
                                    }}
                                    onClick={() => handleMobileCategorySelect(category)}
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
                                                    {smartphoneSubcategories.map((subcat) => (
                                                        <motion.div key={subcat} className="text-center">
                                                            <div
                                                                className={`font-bold hover:text-slate-100 cursor-pointer transition-colors ${
                                                                    selectedCategory === subcat ? 
                                                                    'text-white' : 
                                                                    'text-gray-200'
                                                                }`}
                                                                onClick={() => handleSubcategorySelect(subcat)}
                                                            >
                                                                {subcat}
                                                            </div>
                                                        </motion.div>
                                                    ))}
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
