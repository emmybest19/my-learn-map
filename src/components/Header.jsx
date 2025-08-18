import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileToggle = () => {
    setIsMobile(false);
  };

  return (
    <div className="sticky top-0 z-30">
      <header className="w-full  bg-[#1E3A8A] py-3 flex items-center justify-between px-8 md:px-14  gap-5 ">
        <div className="text-2xl font-bold text-white">EduTech</div>

        {/* Search Bar (Center) */}
        <div className="flex-1 hidden justify-center sm:flex">
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
          <a
            href="#"
            className="hover:text-[#F59E0B] pb-2 transition-all ease-in-out duration-150 delay-150 hover:border-b border-[#F59E0B]"
          >
            Courses
          </a>
          <a
            href="#"
            className="hover:text-[#F59E0B] pb-2 transition-all ease-in-out duration-150 delay-150 hover:border-b border-[#F59E0B]"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-[#F59E0B] pb-2 transition-all ease-in-out duration-150 delay-150 hover:border-b border-[#F59E0B]"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-[#F59E0B] pb-2 transition-all ease-in-out duration-150 delay-150 hover:border-b border-[#F59E0B]"
          >
            Sign Up
          </a>
          <a
            href="#"
            className=" bg-[#F59E0B] px-6 py-2  transition-all ease-in-out  hover:bg-[#a87010] duration-150 delay-150 rounded-full"
          >
            Sign In
          </a>
        </nav>
        <button onClick={handleMobileToggle} className="lg:hidden text-white">
          {isMobile ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        <AnimatePresence>
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              exit={{opacity: 0, x: -500}}
              className={`fixed top-0 left-0 h-screen w-3/4  ease-in-out z-40 lg:hidden bg-[#3b6aea] `}
            >
              <div className="text-lg flex flex-col p-6 h-full space-y-5 text-center text-white ">
                {["Courses", "About", "Contact", "Sign up", "Signin"].map(
                  (item, index) => {
                    const signUp = item === "Sign up";
                    const signIn = item === "Signin";
                    return (
                      <a
                        key={index}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        onClick={closeMobileToggle}
                        className={
                          signUp
                            ? "bg-[#F59E0B] px-6 py-2  transition-all ease-in-out duration-150  hover:bg-[#a87010] delay-150 rounded-full"
                            : signIn
                            ? "bg-[#F59E0B] px-6 py-2  transition-all ease-in-out duration-150  hover:bg-[#a87010] delay-150 rounded-full"
                            : "hover:text-[#F59E0B]"
                        }
                      >
                        {item}
                      </a>
                    );
                  }
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/*Backdrop filter*/}
        <AnimatePresence>
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={closeMobileToggle}
              className="bg-black fixed inset-0  z-20 lg:hidden"
            />
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Header;
