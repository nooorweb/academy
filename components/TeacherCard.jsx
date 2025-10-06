import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeacherCard({ teacher }) {
  // Handle image paths with spaces and provide fallback
  const avatarSrc = teacher.avatar || "/images/teacher1.jpeg";
  
  // Pakistani names for authentic local reviews
  const pakistaniReviewers = [
    "Ali Raza", "Fatima Noor", "Ahmed Khan", "Ayesha Malik", "Hassan Ali",
    "Zainab Sheikh", "Muhammad Usman", "Sana Tariq", "Bilal Ahmad", "Mariam Qureshi"
  ];
  
  const getRandomReviewers = () => {
    const shuffled = [...pakistaniReviewers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const reviewers = getRandomReviewers();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link
        href={`/teachers/${teacher.id}`}
        className="block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full"
      >
        {/* Cover Image Section */}
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={avatarSrc} 
            alt={teacher.name}
            width={400}
            height={256}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized={true}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-gray-900">{teacher.rating}</span>
          </div>

          {/* Teacher Name and Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-lg">
              {teacher.name}
            </h3>
            <p className="text-white/90 text-sm drop-shadow-lg">
              {teacher.title}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Experience and Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{teacher.experience}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <span>{teacher.studentsCount?.toLocaleString()}+ students</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {teacher.badges?.slice(0, 2).map((badge, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Specializations</h4>
            <div className="flex flex-wrap gap-2">
              {teacher.specializations?.slice(0, 3).map((spec, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs bg-gray-100 text-gray-700"
                >
                  {spec}
                </span>
              ))}
              {teacher.specializations?.length > 3 && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs bg-gray-100 text-gray-700">
                  +{teacher.specializations.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-lg text-gray-900">
                {teacher.coursesCount}
              </div>
              <div className="text-sm text-gray-600">Courses</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-lg text-gray-900">
                {teacher.reviewsCount?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mb-4 pb-4 border-b border-gray-100">
            <div className="text-xs text-gray-600">
              Reviewed by <span className="font-medium">{reviewers.join(", ")}</span> and others
            </div>
          </div>

          {/* View Profile Button */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              View Profile
            </span>
            <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}