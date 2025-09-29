import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { courses } from "../../data/courses";

export default function CourseDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <p className="text-gray-600">We couldn't locate that course.</p>
        <Link href="/courses" className="text-indigo-600 underline mt-4 inline-block">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>{course.title} | Pro Academy</title>
      </Head>

      {/* Hero Section */}
      <div className="relative w-full bg-white border-b border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left side: text */}
          <div>
            <Link
              href="/courses"
              className="inline-block mb-6 text-sm font-medium px-3 py-1 border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
            >
              ← Back to Courses
            </Link>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
              {course.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {course.level && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
              )}
              {course.durationMonths && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                  {course.durationMonths} Month{course.durationMonths > 1 ? "s" : ""}
                </span>
              )}
              {course.teacher && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                  {course.teacher}
                </span>
              )}
            </div>
          </div>

          {/* Right side: bigger image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={course.image || "/globe.svg"}
              alt={course.title}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
        
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="rounded-xl shadow-sm bg-white p-6 md:p-8 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              About this Course
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {course.description ||
                "This course will help you gain professional skills and knowledge to boost your career path."}
            </p>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div>
          <div className="rounded-xl shadow-sm bg-white p-6 md:p-8 border border-gray-200 space-y-4">
            <div className="text-2xl font-extrabold text-gray-900">
              {course.fee ? `${course.fee.toLocaleString()} ${course.currency || "PKR"}` : "Free"}
            </div>
            <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition">
              <Link href={`/enroll?courseId=${course.id}`}>Enroll Now</Link>
            </button>
            <p className="text-sm text-gray-500 text-center">
              Secure your seat today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
