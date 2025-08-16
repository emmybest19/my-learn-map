import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="sticky top-0 z-30">
      <header className="w-full  bg-[#1E3A8A] py-3 flex items-center justify-between px-16  gap-5 ">
        <div className="text-2xl font-bold text-white">EduTech</div>

        {/* Search Bar (Center) */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for courses"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a7b7e6]"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 h-5 w-5" />
          </div>
        </div>

        {/* CTA Links (Right) */}
        <nav className="hidden lg:flex lg:justify-between lg:items-center space-x-10 text-white font-medium text-md items-center py-4">
          <a href="#" className="hover:text-[#F59E0B] pb-2 transition-all ease-in-out duration-150 delay-150 hover:border-b border-[#F59E0B]">
            Courses
          </a>
          <a href="#" className="hover:text-[#F59E0B] pb-2 transition-all ease-in-out duration-150 delay-150 hover:border-b border-[#F59E0B]">
            About
          </a>
          <a href="#" className="hover:text-[#F59E0B] pb-2 transition-all ease-in-out duration-150 delay-150 hover:border-b border-[#F59E0B]">
            Contact
          </a>
          <a href="#" className="hover:text-[#F59E0B] pb-2 transition-all ease-in-out duration-150 delay-150 hover:border-b border-[#F59E0B]">
            Sign Up
          </a>
          <a href="#" className=" bg-[#F59E0B] px-6 py-2  transition-all ease-in-out duration-150 delay-150 hover:bg-[#a87010] duration-150 delay-150 rounded-full">
            Sign In
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
