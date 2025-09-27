import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/carousel-img-1.jpeg"
          alt="The Global English Academy"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-white h-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 sm:space-y-8 max-w-2xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg bg-primary-gradient"
              >
                <i className="fas fa-star mr-2 text-sm"></i>
                Premier Education
              </motion.div>

              {/* Logo and Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-start"
              >
                <img src="/logo.jpeg" alt="Academy Logo" className="h-16 w-auto mb-4" />
                <div className="text-gray-100 font-semibold text-lg">"Empowering Minds, Shaping Futures"</div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-black text-white leading-tight font-heading"
              >
                The Global English Academy
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl">
                  Excellence in Education
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-lg sm:max-w-xl"
              >
                Welcome to Global English Language & Computer Academy, Bannu – a trusted hub for English communication, computer education, safety certifications, and academic growth. Join us today to build skills that shape your future.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="/courses" 
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-primary-gradient text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base lg:text-lg uppercase font-semibold"
                >
                  <span className="relative z-10 flex items-center">
                    <i className="fas fa-rocket mr-2 text-sm sm:text-base"></i>
                    <span className="hidden sm:inline">Apply Now</span>
                    <span className="sm:hidden">Apply</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link 
                  href="/contact" 
                  className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-primary-blue font-semibold rounded-full border-2 border-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg uppercase font-semibold"
                >
                  <i className="fas fa-play mr-2 group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base"></i>
                  <span className="hidden sm:inline">Contact Us</span>
                  <span className="sm:hidden">Contact</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
