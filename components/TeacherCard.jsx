import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeacherCard({ teacher }) {
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
        className="block max-w-sm mx-auto rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 overflow-hidden"
      >
        <div className="relative">
          {/* Image Container adjusted to show full image */}
          <div className="h-44 w-full overflow-hidden bg-white relative flex items-center justify-center">
            <Image 
              src={avatarSrc} 
              alt={teacher.name}
              width={400}
              height={224}
              className="max-h-full max-w-full object-contain"
              priority={false}
              onError={(e) => {
                e.target.src = "/images/teacher1.jpeg";
              }}
            />
            <div className="absolute inset-0 pointer-events-none"></div>
          </div>
          {/* Rating removed */}
        </div>
        
        {/* Content Section */}
        <div className="p-4">
          {/* Badges now below image */}
          {teacher.badges?.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {teacher.badges.slice(0, 2).map((badge, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold border border-blue-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          {/* Teacher Info */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors duration-300 font-heading line-clamp-1">
              {teacher.name}
            </h3>
            {teacher.title && (
              <p className="text-xs text-gray-600 mb-3 line-clamp-1">{teacher.title}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-clock text-blue-500 text-xs"></i>
                {teacher.experience}
              </span>
            </div>
          </div>
          
          {/* Specializations */}
          <div className="mb-3">
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
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-book text-blue-500"></i>
                {teacher.coursesCount} courses
              </span>
            </div>
            <span className="text-sm text-blue-600 font-semibold transition-colors duration-300 flex items-center gap-1">
              View Profile 
              <i className="fas fa-arrow-right ml-1 transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}