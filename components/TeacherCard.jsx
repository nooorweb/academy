import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeacherCard({ teacher }) {
  // Handle image paths with spaces and provide fallback
  const avatarSrc = teacher.avatar || "/images/teacher1.jpeg";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link
        href={`/teachers/${teacher.id}`}
        className="block rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform-gpu hover:ring-2 hover:ring-primary-blue/20 hover:border-primary-blue/30"
      >
        <div className="relative">
          {/* Image Container with improved sizing */}
          <div className="h-56 w-full overflow-hidden bg-gray-100 relative">
            <Image 
              src={avatarSrc} 
              alt={teacher.name}
              width={400}
              height={224}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority={false}
              onError={(e) => {
                e.target.src = "/images/teacher1.jpeg";
              }}
              unoptimized={true}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {teacher.badges?.slice(0, 2).map((badge, index) => (
              <span 
                key={index} 
                className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
          
          {/* Rating */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg border border-white/20">
            <i className="fas fa-star text-yellow-500 text-sm"></i>
            <span className="text-sm font-bold text-gray-800">{teacher.rating}</span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          {/* Teacher Info */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-300 font-heading line-clamp-1">
              {teacher.name}
            </h3>
            {teacher.title && (
              <p className="text-sm text-gray-600 mb-3 line-clamp-1">{teacher.title}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-clock text-blue-500 text-xs"></i>
                {teacher.experience}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-users text-blue-500 text-xs"></i>
                {teacher.studentsCount?.toLocaleString()}+ students
              </span>
            </div>
          </div>
          
          {/* Specializations */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {teacher.specializations?.slice(0, 3).map((spec, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center rounded-lg bg-blue-50 text-blue-700 px-3 py-1.5 text-xs font-semibold border border-blue-100"
                >
                  {spec}
                </span>
              ))}
              {teacher.specializations?.length > 3 && (
                <span className="inline-flex items-center rounded-lg bg-gray-50 text-gray-600 px-3 py-1.5 text-xs font-semibold border border-gray-100">
                  +{teacher.specializations.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          {/* Stats & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-book text-blue-500"></i>
                {teacher.coursesCount} courses
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-star text-yellow-500"></i>
                {teacher.reviewsCount?.toLocaleString() || '0'} reviews
              </span>
            </div>
            <span className="text-sm text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300 flex items-center gap-1">
              View Profile 
              <i className="fas fa-arrow-right ml-1 transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}