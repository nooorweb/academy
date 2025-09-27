import Hero from "../components/Hero";
import ImageCarousel from "../components/ImageCarousel";
import CourseGrid from "../components/CourseGrid";
import CounterSection from "../components/CounterSection";
import { courses } from "../data/courses";
import { testimonials } from "../data/testimonials";
import { features } from "../data/features";
import { foundation } from "../data/foundation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <>
      {/* Image Carousel Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <ImageCarousel />
      </section>
      
      {/* Counter Section */}
      <CounterSection />
      
      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-text font-heading">Our Foundation</h2>
            <p className="text-gray-text text-xl max-w-3xl mx-auto leading-relaxed">
              Built on strong principles that guide everything we do at The Global English Academy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background-gray rounded-2xl shadow-lg p-8 border-l-4 border-primary-blue hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-eye text-primary-blue text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-dark-text font-heading">Vision</h3>
              </div>
              <p className="text-gray-text leading-relaxed">
                To be a leading center of excellence that empowers learners with knowledge, skills, and values to thrive in a global society and create positive change in the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background-gray rounded-2xl shadow-lg p-8 border-l-4 border-success-green hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-success-green/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-bullseye text-success-green text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-dark-text font-heading">Mission</h3>
              </div>
              <p className="text-gray-text leading-relaxed ">
                Our mission is to provide affordable, high-quality education in English, technology, and professional development, using innovative teaching methods and internationally recognized programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background-gray rounded-2xl shadow-lg p-8 border-l-4 border-accent-purple hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-heart text-accent-purple text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-dark-text font-heading">Core Values</h3>
              </div>
              <ul className="space-y-2 text-gray-text">
                <li className="flex items-start gap-2 ">
                  <i className="fas fa-star text-yellow-500 mt-1"></i>
                  <span><strong>Excellence</strong> – Highest standards in teaching and learning</span>
                </li>
                <li className="flex items-start gap-2 ">
                  <i className="fas fa-star text-yellow-500 mt-1"></i>
                  <span><strong>Integrity</strong> – Honesty and ethical practices</span>
                </li>
                <li className="flex items-start gap-2 ">
                  <i className="fas fa-star text-yellow-500 mt-1"></i>
                  <span><strong>Innovation</strong> – Modern teaching methods</span>
                </li>
                <li className="flex items-start gap-2 ">
                  <i className="fas fa-star text-yellow-500 mt-1"></i>
                  <span><strong>Inclusiveness</strong> – Equal opportunities for all</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-background-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-text font-heading">Why Choose The Global English Academy?</h2>
            <p className="text-gray-text text-xl max-w-3xl mx-auto leading-relaxed ">
              We provide the tools, knowledge, and support you need to succeed in today's competitive job market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-user-graduate",
                title: "Professional & Certified Trainers",
                description: "Learn from industry experts with proven track records and years of experience.",
                color: "primary-blue"
              },
              {
                icon: "fas fa-tools",
                title: "Practical Learning Approach",
                description: "Hands-on training with real-world projects and practical scenarios.",
                color: "success-green"
              },
              {
                icon: "fas fa-laptop",
                title: "Modern Teaching Methods",
                description: "Latest technology and updated curriculum for current market needs.",
                color: "accent-purple"
              },
              {
                icon: "fas fa-medal",
                title: "Certificate Upon Completion",
                description: "Industry-recognized certificates to boost your career prospects.",
                color: "warning-orange"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 lift-up"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/20`}>
                  <i className={`${feature.icon} text-3xl text-${feature.color}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-dark-text font-heading">{feature.title}</h3>
                <p className="text-gray-text leading-relaxed ">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-text font-heading">Featured Courses</h2>
            <p className="text-gray-text text-xl max-w-3xl mx-auto leading-relaxed ">
              Start your journey with our most popular courses designed for career growth.
            </p>
          </motion.div>
          <CourseGrid courses={featuredCourses} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2 bg-primary-gradient text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg uppercase font-semibold"
            >
              <i className="fas fa-arrow-right"></i>
              View All Courses
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-background-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-text font-heading">What Our Students Say</h2>
            <p className="text-gray-text text-xl max-w-3xl mx-auto leading-relaxed ">
              Hear from our graduates who have transformed their careers with The Global English Academy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Frontend Developer",
                company: "TechCorp",
                content: "The Global English Academy helped me transition from a non-tech background to a successful developer role. The practical approach and expert guidance were invaluable.",
                avatar: "/images/testimonial1.jpeg"
              },
              {
                name: "Michael Chen",
                role: "Full Stack Developer",
                company: "StartupXYZ",
                content: "The courses are well-structured and the instructors are industry experts. I landed my dream job within 3 months of completing the program.",
                avatar: "/images/testimonial2.jpeg"
              },
              {
                name: "Emily Rodriguez",
                role: "UI/UX Designer",
                company: "Design Studio",
                content: "The hands-on projects and real-world scenarios made learning engaging and practical. Highly recommend for anyone serious about their career.",
                avatar: "/images/testimonial3.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 lift-up"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-primary-blue font-heading">{testimonial.name}</div>
                    <div className="text-sm text-gray-text ">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-text italic ">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-heading">
        Ready to Transform Your Career?
      </h2>
      <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
        Join thousands of students who have already taken the first step towards 
        their dream career with <span className="font-semibold">The Global English Academy</span>.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <Link 
          href="/courses"
          className="group inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-gray-100 
          px-7 py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 
          transform hover:scale-105 shadow-lg hover:shadow-2xl uppercase"
        >
          <i className="fas fa-rocket group-hover:scale-110 transition-transform duration-300"></i>
          Get Started
        </Link>

        <Link 
          href="/contact"
          className="group inline-flex items-center gap-2 bg-transparent text-white border-2 border-white 
          hover:bg-white hover:text-blue-800 px-7 py-3 rounded-full font-semibold text-base sm:text-lg 
          transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl uppercase"
        >
          <i className="fas fa-phone group-hover:scale-110 transition-transform duration-300"></i>
          Talk to an Advisor
        </Link>
      </div>
    </motion.div>
  </div>
</section>

    </>
  );
}