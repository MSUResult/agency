"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void;
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="py-4 px-6 md:py-6 md:px-10 flex items-center justify-between z-50">
        {/* ✅ Logo Section */}
        <div className="flex items-center">
          <Link className="cursor-pointer" href="/">
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              <Image
                priority
                src="/logo/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* ✅ Desktop Menu */}
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">
            Website Design
          </div>
          <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">
            Graphic Design
          </div>
          <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
            Digital Marketing
          </div>
          <div onClick={scrollToBrands} className="hover:text-gray-50">
            Brands
          </div>
          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>

        {/* ✅ Mobile Dropdown */}
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices}
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        {/* ✅ Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
              inline-flex h-12 animate-shimmer items-center justify-center 
              rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50
            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
