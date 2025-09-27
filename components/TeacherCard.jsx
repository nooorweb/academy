import Link from "next/link";
import { motion } from "framer-motion";

export default function TeacherCard({ teacher }) {
  const avatarSrc = teacher.avatar || "/globe.svg";
  
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
        className="group block rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform-gpu hover:ring-2 hover:ring-primary-blue/20 lift-up"
      >
        <div className="relative">
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={avatarSrc} 
              alt={teacher.name}
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
              <p className="text-sm text-gray-text mb-3">{teacher.title}</p>
            )}
            <div className="flex items-center gap-4 text-xs text-gray-text">
              <span className="flex items-center gap-1">
                <i className="fas fa-clock text-primary-blue"></i>
                {teacher.experience}
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-users text-primary-blue"></i>
                {teacher.studentsCount.toLocaleString()}+ students
              </span>
            </div>
          </div>
          
          {teacher.bio && (
            <p className="text-gray-text text-sm mb-4 line-clamp-2">
              {teacher.bio}
            </p>
          )}
          
          {/* Specializations */}
          <div className="mb-4">
            <div className="text-xs font-semibold text-dark-text mb-2">Specializations:</div>
            <div className="flex flex-wrap gap-1">
              {teacher.specializations.slice(0, 3).map((spec, index) => (
                <span key={index} className="inline-flex items-center rounded-full bg-primary-blue/10 text-primary-blue px-3 py-1 text-xs font-medium">
                  {spec}
                </span>
              ))}
              {teacher.specializations.length > 3 && (
                <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-text px-3 py-1 text-xs font-medium">
                  +{teacher.specializations.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-text">
              <span className="flex items-center gap-1">
                <i className="fas fa-book text-primary-blue"></i>
                {teacher.coursesCount} courses
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-star text-yellow-400"></i>
                {teacher.rating}
              </span>
            </div>
            <span className="text-sm text-primary-blue font-semibold group-hover:text-primary-blue/80 transition-colors">
              View Profile <i className="fas fa-arrow-right ml-1"></i>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
