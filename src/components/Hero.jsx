import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1664300299678-25f3342ae114?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1404119796/photo/asian-indian-man-in-wheelchair-sitting-at-dining-room-e-learning-with-laptop-and-writing-notes.webp?a=1&b=1&s=612x612&w=0&k=20&c=x41PZwHLZ5iBXhwN4_jFLn0eqcRhVHjagGJtEv48ERs=",
    "https://plus.unsplash.com/premium_photo-1681490220097-cf6f188196e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664475341204-4b0141d803cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661591135972-0635a0510275?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  // Hero Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-between px-6 md:px-10 py-20 bg-[#1E3A8A] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Learn Anything, Anytime, Anywhere
        </h1>
        <p className="text-base md:text-lg mb-6">
          Join thousands of learners worldwide and gain new skills with our
          expert-led courses.
        </p>
        <Button >
          <span className="bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-full shadow-md cursor-pointer hover:bg-[#a87010]">Explore Courses</span>
        </Button>
      </motion.div>

      {/* Image Carousel */}
      <motion.div
        key={currentImage}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center aspect-[4/3]"
      >
        <motion.img
          src={images[currentImage]}
          alt="Learning"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-lg w-full  object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
