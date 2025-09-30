import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import EnrollmentForm from "./EnrollmentForm";

export default function CourseCard({ course }) {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const imageSrc = course.image || "/globe.svg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/courses/${course.id}`}
        className="group block rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col"
      >
        {/* Image */}
        <div className="h-40 md:h-48 w-full overflow-hidden relative">
          <img
            src={imageSrc}
            alt="Course image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 flex flex-col flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {course.level && (
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium shadow-sm ${
                  course.level === "beginner"
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : course.level === "intermediate"
                    ? "bg-orange-100 text-orange-700 border border-orange-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                <i
                  className={`fas ${
                    course.level === "beginner"
                      ? "fa-seedling"
                      : course.level === "intermediate"
                      ? "fa-tree"
                      : "fa-fire"
                  } mr-1`}
                ></i>
                {course.level}
              </span>
            )}
            {course.durationMonths && (
              <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2.5 py-1 text-[11px] font-medium shadow-sm border border-gray-200">
                <i className="fas fa-calendar mr-1"></i>
                {course.durationMonths} Mo
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-sm md:text-base font-bold leading-snug mb-2 text-gray-900 group-hover:text-primary-blue transition-colors duration-300">
            {course.title}
          </h3>

          {/* Description */}
          {course.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">
              {course.description}
            </p>
          )}

          {/* Teacher + Rating */}
          <div className="flex items-center justify-between mb-4 mt-auto">
            {course.teacher && (
              <div className="flex items-center gap-2 text-xs text-gray-600">
              
                <div>
                  <div className="font-medium text-gray-900 text-sm">
                    {course.teacher}
                  </div>
                  <div className="text-[11px] text-gray-500">Instructor</div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-xs"></i>
              ))}
              <span className="text-gray-500 text-[11px] ml-1">(4.9)</span>
            </div>
          </div>

          {/* Fee + Button */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-primary-blue font-bold text-lg md:text-xl">
                {course.fee ? `${course.fee.toLocaleString()}` : "Free"}
              </div>
              <div className="text-gray-500 text-[11px] uppercase tracking-wide">
                {course.currency || "PKR"}
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsEnrollmentOpen(true);
              }}
              className="bg-primary-blue text-white px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:translate-x-1 hover:bg-blue-700"
            >
              <span className="hidden sm:inline">Enroll</span>
              <span className="sm:hidden">Join</span>
              <i className="fas fa-arrow-right ml-1 text-[10px]"></i>
            </button>
          </div>
        </div>
      </Link>
      
      {/* Enrollment Form Modal */}
      <EnrollmentForm 
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        courseTitle={course.title}
        coursePrice={course.fee ? course.fee.toLocaleString() : "Free"}
        courseCurrency={course.currency || "PKR"}
      />
    </motion.div>
  );
}
