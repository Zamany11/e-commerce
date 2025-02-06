"use client";
import { useState } from 'react';
import { Menu, MenuItem, HoveredLink } from "../components/ui/category-menu";
import { cn } from "@/lib/utils";

export default function ResponsiveCategoryBar() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(0);
    const desktopCategories = ['Featured', 'Accessories', 'Iphones', 'Samsung', 'Techno', 'Infinix', 'Itel', 'Redmi'];
    const mobileMainCategories = ['Featured', 'Smartphones', 'Accessories'];
    const smartphoneSubCategories = ['Iphones', 'Samsung', 'Techno', 'Infinix', 'Redmi'];

    return (
        <>
            {/* Mobile Version */}
            <section className="md:hidden bg-red-500">
                <div className="container mx-auto">
                    <Navbar 
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        mainCategories={mobileMainCategories}
                        subCategories={smartphoneSubCategories}
                        desktopCategories={desktopCategories}
                    />
                </div>
            </section>

            {/* Desktop Version */}
            <section className="hidden md:block bg-red-500">
                <div className="container mx-auto">
                    <ul className="flex items-center justify-between p-5">
                        {desktopCategories.map((category, index) => (
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
        </>
    );
}

function Navbar({
    className,
    mainCategories,
    subCategories,
    desktopCategories,
    selectedCategory,
    setSelectedCategory
}: {
    className?: string;
    mainCategories: string[];
    subCategories: string[];
    desktopCategories: string[];
    selectedCategory: number | null;
    setSelectedCategory: (index: number) => void;
}) {
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={(active) => {
                if (!active) return;
                const index = desktopCategories.indexOf(active);
                if (index !== -1) setSelectedCategory(index);
            }}>
                {mainCategories.map((category) => {
                    if (category === 'Smartphones') {
                        return (
                            <MenuItem 
                                key={category}
                                item={category}
                                setActive={() => setSelectedCategory(desktopCategories.indexOf(category))}
                                active={subCategories.includes(desktopCategories[selectedCategory ?? 0]) ? category : null}
                            >
                                <div className="flex flex-col space-y-4 text-sm bg-red-500">
                                    {subCategories.map((subCat) => {
                                        const subIndex = desktopCategories.indexOf(subCat);
                                        return (
                                            <HoveredLink 
                                                key={subCat}
                                                href={`/${subCat.toLowerCase()}`}
                                                onClick={() => setSelectedCategory(subIndex)}
                                            >
                                                <span className={
                                                    selectedCategory === subIndex 
                                                    ? 'text-white border-b-2 border-white' 
                                                    : 'text-gray-200'
                                                }>
                                                    {subCat}
                                                </span>
                                            </HoveredLink>
                                        );
                                    })}
                                </div>
                            </MenuItem>
                        );
                    }
                    
                    return (
                        <MenuItem 
                            key={category}
                            item={category}
                            setActive={() => setSelectedCategory(desktopCategories.indexOf(category))}
                            active={desktopCategories[selectedCategory ?? 0] === category ? category : null}
                        >
                            <div className="bg-red-500 p-2">
                                <span className={
                                    desktopCategories[selectedCategory ?? 0] === category 
                                    ? 'text-white border-b-2 border-white' 
                                    : 'text-gray-200'
                                }>
                                    {category}
                                </span>
                            </div>
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
}
