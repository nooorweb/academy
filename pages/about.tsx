import Head from "next/head";
import Image from "next/image";
import ImageCarousel from "../components/ImageCarousel";
import { aboutCarouselSlides } from "../data/aboutCarousel";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Carousel Section - Full Screen */}
      <ImageCarousel 
        slides={aboutCarouselSlides} 
        height="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]"
        showBadge={true}
        showProgressBar={true}
        autoPlay={true}
      />
      
      <div className="mx-auto max-w-6xl px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Head>
          <title>About | The Global English Academy</title>
        </Head>

        {/* Introduction Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Global English Academy, Bannu is a premier institution dedicated to empowering learners with globally relevant skills in English communication, computer technology, and professional development.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Since our establishment, we have been committed to providing high-quality education that bridges the gap between traditional learning and modern industry requirements. Our innovative approach combines theoretical knowledge with practical application.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe in creating an inclusive learning environment where every student can thrive and achieve their career goals. Our experienced instructors and state-of-the-art facilities ensure that our students receive the best possible education.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image 
              src="/images/About/about-1.jpg" 
              alt="The Global English Academy Campus" 
              width={400}
              height={300}
              className="w-full max-w-md h-auto rounded-lg shadow-xl"
              style={{ border: '2px solid #ddd', borderRadius: '10px' }}
            />
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-eye text-blue-600 text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a leading center of excellence that empowers learners with knowledge, skills, and values to thrive in a global society and create positive change in the world.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-bullseye text-green-600 text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide affordable, high-quality education in English, technology, and professional development, using innovative teaching methods and internationally recognized programs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-heart text-purple-600 text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Core Values</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <i className="fas fa-star text-yellow-500 mt-1"></i>
                <span><strong>Excellence</strong> – Highest standards in teaching and learning</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-star text-yellow-500 mt-1"></i>
                <span><strong>Integrity</strong> – Honesty and ethical practices</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-star text-yellow-500 mt-1"></i>
                <span><strong>Innovation</strong> – Modern teaching methods</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-star text-yellow-500 mt-1"></i>
                <span><strong>Inclusiveness</strong> – Equal opportunities for all</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose The Global English Academy?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-graduate text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience and proven track records.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art computer labs and learning resources for hands-on experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Programs</h3>
              <p className="text-gray-600">Internationally recognized certificates that boost your career prospects.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Support</h3>
              <p className="text-gray-600">Comprehensive career guidance and job placement assistance for our graduates.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">Join a vibrant community of learners and professionals from diverse backgrounds.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">Convenient class timings that fit your busy lifestyle and commitments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}