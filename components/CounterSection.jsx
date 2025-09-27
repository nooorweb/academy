import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CounterSection() {
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    successRate: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    const targetCounts = {
      students: 10000,
      courses: 200,
      instructors: 50,
      successRate: 95
    };

    const duration = 4000; // 4 seconds (slower)
    const interval = 50; // update every 50ms
    const steps = duration / interval;

    const increments = {
      students: targetCounts.students / steps,
      courses: targetCounts.courses / steps,
      instructors: targetCounts.instructors / steps,
      successRate: targetCounts.successRate / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        students: Math.min(Math.floor(increments.students * currentStep), targetCounts.students),
        courses: Math.min(Math.floor(increments.courses * currentStep), targetCounts.courses),
        instructors: Math.min(Math.floor(increments.instructors * currentStep), targetCounts.instructors),
        successRate: Math.min(Math.floor(increments.successRate * currentStep), targetCounts.successRate)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  const stats = [
    {
      icon: "fas fa-users",
      count: counts.students,
      suffix: "+",
      label: "Happy Students",
      color: "text-blue-500"
    },
    {
      icon: "fas fa-book",
      count: counts.courses,
      suffix: "+",
      label: "Professional Courses",
      color: "text-green-500"
    },
    {
      icon: "fas fa-chalkboard-teacher",
      count: counts.instructors,
      suffix: "+",
      label: "Expert Instructors",
      color: "text-purple-500"
    },
    {
      icon: "fas fa-trophy",
      count: counts.successRate,
      suffix: "%",
      label: "Success Rate",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onViewportEnter={() => setHasAnimated(true)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-heading">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers with The Global English Academy
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-all duration-300 transform group-hover:scale-110">
                <i className={`${stat.icon} text-3xl ${stat.color}`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-3 text-black font-heading">
                {stat.count}{stat.suffix}
              </div>
              <div className="text-gray-700 font-semibold text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
