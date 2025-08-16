
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button.jsx";


import Hero from "../components/Hero.jsx";
import Header from "../components/Header.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Category from "../components/Category.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />

      <Hero />

      
      <Category />

      <Testimonial />

      
      <section className="px-6 md:px-10 py-20 text-center bg-[#1E3A8A] text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Start Your Learning Journey Today
        </h2>
        <Button >
          <span className="bg-[#F59E0B] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#a87010] transition-all ease-in-out duration-150 delay-150 cursor-pointer">Get Started</span>
        </Button>
      </section>

     
      <footer className="px-6 md:px-10 py-6 text-center bg-[#3B82F6] text-white">
        © {new Date().getFullYear()} EduTech. All rights reserved.
      </footer>
    </div>
  );
}
