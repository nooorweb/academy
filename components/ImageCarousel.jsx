"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

export default function ImageCarousel({ 
  slides = [], 
  height = "h-[70vh] lg:h-[85vh]",
  showBadge = false,
  showProgressBar = true,
  autoPlay = true
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className={`relative w-full ${height} overflow-hidden bg-black`}>
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
                    {showBadge && slide.badge && (
                      <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg ${slide.badgeColor || 'bg-gradient-to-r from-blue-500 to-purple-600'}`}>
                        <i className="fas fa-star mr-1.5 text-xs"></i>
                        {slide.badge}
                      </span>
                    )}

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
                    <div className="flex flex-col sm:flex-row gap-3">
                      {slide.cta && slide.ctaLink && (
                        <Button
                          href={slide.ctaLink}
                          variant="primary"
                          size="md"
                          icon="fas fa-arrow-right"
                        >
                          {slide.cta}
                        </Button>
                      )}
                      <Button
                        href="/contact"
                        variant="ghost"
                        size="md"
                        icon="fas fa-play"
                      >
                        Contact Us
                      </Button>
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
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-lg"></i>
        </button>
        <button
          onClick={goToNext}
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-lg"></i>
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
      {showProgressBar && (
        <motion.div
          key={currentSlide}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          onAnimationComplete={autoPlay ? goToNext : undefined}
        />
      )}
    </div>
  );
}
