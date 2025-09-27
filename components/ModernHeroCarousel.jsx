"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ModernHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
      {
      id: 1,
      image: "/images/About/about-1.jpg",
      title: "Meeting Cricketer",
      subtitle: "Inspiring Excellence Through Sports",
      description:
        "An exclusive meeting with a renowned Pakistani cricketer, inspiring our students to pursue excellence both in academics and sports, fostering discipline, teamwork, and determination.",
      badge: "Special Event",
      badgeColor: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      id: 2,
      image: "/images/About/about-2.jpg",
      title: "Celebrating Excellence",
      subtitle: "Moment of Achievement",
      description:
        "Witness the joy and pride as we celebrate our students' remarkable achievements and dedication to learning excellence.",
      badge: "Success Story",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      id: 3,
      image: "/images/About/about-3.jpg",
      title: "Professional Development",
      subtitle: "Skills Enhancement Workshop",
      description:
        "Join our comprehensive workshops and seminars designed to enhance communication skills and professional development.",
      badge: "Workshop",
      badgeColor: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      id: 4,
      image: "/images/About/about-4.jpg",
      title: "Recognition & Awards",
      subtitle: "Honoring Excellence",
      description:
        "Celebrating outstanding achievements and recognizing the hard work and dedication of our students and faculty members.",
      badge: "Awards",
      badgeColor: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
      id: 5,
      image: "/images/About/about-6.jpg",
      title: "Community Celebration",
      subtitle: "United in Success",
      description:
        "Celebrating together as a community, sharing moments of joy and achievement that define our academy's spirit.",
      badge: "Community",
      badgeColor: "bg-gradient-to-r from-red-400 to-pink-500",
    },
  ];

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                className="object-cover object-center transition-all duration-1000 ease-in-out"
                priority={currentSlide === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
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
                        {heroSlides[currentSlide].badge}
                      </motion.div>

                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-white leading-tight font-heading"
                    >
                      {heroSlides[currentSlide].title}
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl">
                        {heroSlides[currentSlide].subtitle}
                      </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      className="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-lg sm:max-w-xl"
                    >
                      {heroSlides[currentSlide].description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-primary-gradient text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base lg:text-lg uppercase font-semibold">
                        <span className="relative z-10 flex items-center">
                          <i className="fas fa-rocket mr-2 text-sm sm:text-base"></i>
                          <span className="hidden sm:inline">Explore Academy</span>
                          <span className="sm:hidden">Explore</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>

                      <button className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-primary-blue font-semibold rounded-full border-2 border-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg uppercase font-semibold">
                        <i className="fas fa-play mr-2 group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base"></i>
                        <span className="hidden sm:inline">Watch Video</span>
                        <span className="sm:hidden">Video</span>
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Bottom Right */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 flex gap-2 sm:gap-3 z-20">
          <button
            onClick={goToPrevious}
            className="bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl border border-white/30"
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left text-sm sm:text-base md:text-lg"></i>
          </button>

          <button
            onClick={goToNext}
            className="bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl border border-white/30"
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right text-sm sm:text-base md:text-lg"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 flex gap-2 sm:gap-3 md:gap-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 shadow-lg border-2 ${
                index === currentSlide
                  ? "bg-white scale-125 border-white"
                  : "bg-white/40 hover:bg-white/60 border-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      </div>
    </div>
  );
}
