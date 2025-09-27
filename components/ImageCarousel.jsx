"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/carousel-img-1.jpeg",
      title: "Welcome to The Global English Academy",
      subtitle: "Empowering Minds, Shaping Futures",
      description: "Professional English language and computer education in Bannu",
      cta: "Explore Courses",
      ctaLink: "/courses",
    },
    {
      id: 2,
      image: "/images/carousel-img-2.jpeg",
      title: "Expert-Led Training Programs",
      subtitle: "Learn from Industry Professionals",
      description: "Comprehensive courses designed for career success",
      cta: "Meet Our Teachers",
      ctaLink: "/teachers",
    },
    {
      id: 3,
      image: "/images/carousel-img-3.jpeg",
      title: "Modern Learning Environment",
      subtitle: "State-of-the-Art Facilities",
      description: "Equipped with latest technology and resources",
      cta: "Take a Tour",
      ctaLink: "/about",
    },
    {
      id: 4,
      image: "/images/carousel-img-4.jpeg",
      title: "Certified Programs",
      subtitle: "Internationally Recognized Certificates",
      description: "Boost your career with industry-standard certifications",
      cta: "View Certificates",
      ctaLink: "/courses",
    },
    {
      id: 5,
      image: "/images/carousel-img-5.jpeg",
      title: "Student Success Stories",
      subtitle: "Join Our Community",
      description: "Be part of thousands of successful graduates",
      cta: "Read Testimonials",
      ctaLink: "/about",
    },
  ];

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden bg-black">
      {/* Slides stack */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            {/* Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            {/* Content */}
            {index === currentSlide && (
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6 max-w-2xl"
                  >
                    {/* Badge */}
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg bg-gradient-to-r from-blue-500 to-purple-600">
                      <i className="fas fa-star mr-1.5 text-xs"></i>
                      Premier Education
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                      {slide.title}
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-lg sm:text-xl lg:text-2xl">
                        {slide.subtitle}
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
                      {slide.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={slide.ctaLink}
                        className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 text-sm lg:text-base"
                      >
                        <i className="fas fa-rocket mr-2"></i>
                        {slide.cta}
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105 text-sm lg:text-base"
                      >
                        <i className="fas fa-play mr-2"></i>
                        Contact Us
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-20">
        <button
          onClick={goToPrevious}
          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={goToNext}
          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-6 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        key={currentSlide}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
        onAnimationComplete={goToNext}
      />
    </div>
  );
}
