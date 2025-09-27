import Head from "next/head";
import TeacherCard from "../../components/TeacherCard";
import { teachers } from "../../data/teachers";

export default function TeachersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Head>
        <title>Teachers | Pro Academy</title>
      </Head>
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">Our Expert Instructors</h1>
      <p className="text-gray-600 mb-8">Meet our industry professionals who are passionate about sharing their knowledge and helping you succeed.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}


