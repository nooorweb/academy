import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { teachers } from "../../data/teachers";
import { courses } from "../../data/courses";

export default function TeacherDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const teacher = teachers.find((t) => t.id === id);

  if (!teacher) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-bold">Teacher not found</h1>
        <Link href="/teachers" className="text-indigo-600 underline mt-4 inline-block">
          Back to Teachers
        </Link>
      </div>
    );
  }

  const teacherCourses = courses.filter((c) =>
    c.teacher ? c.teacher.toLowerCase().replace(/\s+/g, "-") === teacher.id : false
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>{teacher.name} | Pro Academy</title>
      </Head>

      {/* Hero Section */}
      <div className="relative w-full bg-white border-b border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div>
            <Link
              href="/teachers"
              className="inline-block mb-6 text-sm font-medium px-3 py-1 border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
            >
              ← Back to Teachers
            </Link>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight text-gray-900">
              {teacher.name}
            </h1>
            {teacher.title && (
              <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">{teacher.title}</p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {teacher.experience && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                  {teacher.experience}
                </span>
              )}
              {typeof teacher.studentsCount === "number" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                  {teacher.studentsCount.toLocaleString()}+ students
                </span>
              )}
              {typeof teacher.coursesCount === "number" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                  {teacher.coursesCount} courses
                </span>
              )}
              {Array.isArray(teacher.badges) && teacher.badges.slice(0, 2).map((b, i) => (
                <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={teacher.avatar || "/globe.svg"}
              alt={teacher.name}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-xl shadow-sm bg-white p-6 md:p-8 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-900">About {teacher.name}</h2>
            <p className="text-gray-700 leading-relaxed">
              {teacher.bio || "This instructor brings real-world expertise and a passion for teaching to help you excel."}
            </p>
          </div>

          {Array.isArray(teacher.specializations) && teacher.specializations.length > 0 && (
            <div className="rounded-xl shadow-sm bg-white p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {teacher.specializations.map((spec, idx) => (
                  <span key={idx} className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-xl shadow-sm bg-white p-6 md:p-8 border border-gray-200">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Courses by {teacher.name}</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {teacherCourses.length === 0 && <li>No courses yet.</li>}
              {teacherCourses.map((c) => (
                <li key={c.id}>
                  <Link className="text-indigo-600" href={`/courses/${c.id}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div>
          <div className="rounded-xl shadow-sm bg-white p-6 md:p-8 border border-gray-200 space-y-4">
            {typeof teacher.rating === "number" && (
              <div className="text-sm text-gray-700">Rating: <span className="font-semibold">{teacher.rating}</span></div>
            )}
            {teacher.experience && (
              <div className="text-sm text-gray-700">Experience: <span className="font-semibold">{teacher.experience}</span></div>
            )}
            {typeof teacher.studentsCount === "number" && (
              <div className="text-sm text-gray-700">Students: <span className="font-semibold">{teacher.studentsCount.toLocaleString()}+</span></div>
            )}
            {typeof teacher.coursesCount === "number" && (
              <div className="text-sm text-gray-700">Courses: <span className="font-semibold">{teacher.coursesCount}</span></div>
            )}
            <Link href="/contact" className="w-full inline-flex justify-center bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition">
              Contact Instructor
            </Link>
            <p className="text-sm text-gray-500 text-center">Have a question? Reach out for guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


