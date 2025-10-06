import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import EnrollmentForm from "./EnrollmentForm";

export default function CourseCard({ course }) {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const imageSrc = course.image || "/globe.svg";

  const getLevelColor = (level) => {
    switch (level) {
      case "beginner":
        return "bg-green-50 text-green-700 border-green-200";
      case "intermediate":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "advanced":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const formatDuration = (months) => {
    if (months < 1) {
      return `${Math.round(months * 30)} Days`;
    } else if (months === 1) {
      return "1 Month";
    } else {
      return `${months} Months`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Level Badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(course.level)}`}>
              {course.level?.charAt(0).toUpperCase() + course.level?.slice(1)}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2 leading-tight">
            {course.title}
          </h3>

          {/* Course Info */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatDuration(course.durationMonths)}</span>
            </div>
            
            {course.teacher && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="truncate">{course.teacher}</span>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-gray-900 ml-1">4.9</span>
            </div>
            <span className="text-sm text-gray-500">• 1,200+ students</span>
          </div>

          {/* Price and Enroll Button */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <div>
              <div className="text-2xl font-semibold text-gray-900">
                {course.fee ? `${course.fee.toLocaleString()}` : "Free"}
              </div>
              {course.fee && (
                <div className="text-sm text-gray-500">
                  {course.currency || "PKR"}
                </div>
              )}
            </div>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsEnrollmentOpen(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm shadow-sm hover:shadow-md"
            >
              Enroll
            </button>
          </div>
        </div>
      </div>
      
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