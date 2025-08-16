import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

function Testimonial() {
    const testimonials = [
    {
      name: "Jane Doe",
      text: "EduTech has transformed the way I learn. The courses are top-notch and the instructors are amazing!"
    },
    {
      name: "John Smith",
      text: "I was able to switch careers thanks to EduTech. The content is practical and easy to follow."
    },
    {
      name: "Emily Johnson",
      text: "The flexibility of learning anytime, anywhere has made my busy life so much easier. Highly recommend!"
    },
    {
      name: "Michael Brown",
      text: "Great community and excellent support team. I never felt lost during my learning journey."
    },
    {
      name: "Sophia Davis",
      text: "I love how interactive and engaging the courses are. I’m learning faster than ever."
    }
  ];
  return (
    <div className="px-6 md:px-10 py-20 bg-white text-center overflow-hidden">
     
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#3B82F6]">
          What Our Learners Say
        </h2>
        <div className="relative">
          <div className="flex flex-col md:flex-row  gap-6 scrollbar-hide snap-y md:snap-x snap-mandatory justify-center overflow-hidden">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] p-6 border rounded-2xl shadow-md bg-gray-50 snap-center "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg italic mb-4">“{t.text}”</p>
                <h4 className="font-semibold text-[#3B82F6]">- {t.name}</h4>
              </motion.div>
            ))}
          </div>

          
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 px-4 -translate-y-1/2">
            <button className="bg-[#1E3A8A] text-white p-2 rounded-full shadow hover:bg-indigo-700">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      
    </div>
  );
}

export default Testimonial;
