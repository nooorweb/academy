import Head from "next/head";
import CourseGrid from "../../components/CourseGrid";
import { courses } from "../../data/courses";
import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Head>
        <title>Computer Courses | The Global English Academy</title>
      </Head>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}              
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Computer Courses</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Master essential computer skills and advance your career with our comprehensive courses designed for the digital age.
        </p>
        <p className="text-blue-700 font-semibold italic">"Building Skills, Bridging Futures, Mastering Success."</p>
      </motion.div>

      <CourseGrid courses={courses} />

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 bg-blue-50 rounded-xl p-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "fas fa-certificate",
              title: "Professional & Certified Trainers",
              description: "Learn from industry experts with proven track records"
            },
            {
              icon: "fas fa-hands-helping",
              title: "Practical Learning Approach",
              description: "Hands-on training with real-world projects and scenarios"
            },
            {
              icon: "fas fa-laptop-code",
              title: "Modern Teaching Methods",
              description: "Latest technology and updated curriculum for current market needs"
            },
            {
              icon: "fas fa-award",
              title: "Certificate Upon Completion",
              description: "Industry-recognized certificates to boost your career prospects"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${feature.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Info */}
     
    </div>
  );
}

