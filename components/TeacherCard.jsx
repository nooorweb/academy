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
    >
      <Link
        href={`/teachers/${teacher.id}`}
        className="group block rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform-gpu hover:ring-2 hover:ring-primary-blue/20"
      >
        <div className="relative">
          <div className="h-48 w-full overflow-hidden">
            <Image 
              src={avatarSrc} 
              alt={teacher.name}
              width={300}
              height={200}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {teacher.badges.slice(0, 2).map((badge, index) => (
              <span key={index} className="inline-flex items-center rounded-full bg-primary-gradient text-white px-3 py-1 text-xs font-medium shadow-lg">
                {badge}
              </span>
            ))}
          </div>
          
          {/* Rating */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg">
            <i className="fas fa-star text-yellow-400 text-sm"></i>
            <span className="text-sm font-semibold text-dark-text">{teacher.rating}</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold leading-snug mb-2 group-hover:text-primary-blue transition-colors font-heading">
              {teacher.name}
            </h3>
            {teacher.title && (
              <p className="text-sm text-gray-600 mb-3">{teacher.title}</p>
            )}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <i className="fas fa-clock text-blue-500"></i>
                {teacher.experience}
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-users text-blue-500"></i>
                {teacher.studentsCount.toLocaleString()}+ students
              </span>
            </div>
          </div>
          
          {/* Specializations */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {teacher.specializations.slice(0, 2).map((spec, index) => (
                <span key={index} className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2 py-1 text-xs font-medium">
                  {spec}
                </span>
              ))}
              {teacher.specializations.length > 2 && (
                <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-600 px-2 py-1 text-xs font-medium">
                  +{teacher.specializations.length - 2} more
                </span>
              )}
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <i className="fas fa-book text-blue-500"></i>
                {teacher.coursesCount} courses
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-star text-yellow-400"></i>
                {teacher.rating}
              </span>
            </div>
            <span className="text-sm text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
              View Profile <i className="fas fa-arrow-right ml-1"></i>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
