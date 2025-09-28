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
        <Link href="/teachers" className="text-indigo-600 underline mt-4 inline-block">Back to Teachers</Link>
      </div>
    );
  }

  const teacherCourses = courses.filter(
    (c) => c.teacher.toLowerCase().replace(/\s+/g, "-") === teacher.id
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Head>
        <title>{teacher.name} | Pro Academy</title>
      </Head>
      <div className="mb-6">
        <Link href="/teachers" className="text-sm text-indigo-600 hover:underline">← Back to Teachers</Link>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <img src={teacher.avatar || "/globe.svg"} alt={teacher.name} className="h-24 w-24 rounded-lg object-cover" />
          <div>
            <h1 className="text-3xl font-extrabold">{teacher.name}</h1>
            {teacher.title && <div className="text-gray-600">{teacher.title}</div>}
          </div>
        </div>
        {teacher.bio && <p className="mt-4 text-gray-700">{teacher.bio}</p>}
        <div className="mt-6">
          <div className="font-semibold mb-2">Courses by {teacher.name}</div>
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
    </div>
  );
}


