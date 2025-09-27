// CourseGrid.tsx
import CourseCard from "./CourseCard";

export default function CourseGrid({ courses }) {
  return (
    <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
