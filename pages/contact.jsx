import Head from "next/head";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
      <Head>
          <title>Contact | The Global English Academy</title>
      </Head>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">Get in Touch</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions about our courses or need guidance? We'd love to hear from you. 
          Send us a message and we'll respond as soon as possible.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-envelope text-blue-600"></i>
            Send us a Message
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  <i className="fas fa-user mr-2 text-blue-600"></i>
                  First Name
                </label>
                <input 
                  type="text" 
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                  placeholder="Your first name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  <i className="fas fa-user mr-2 text-blue-600"></i>
                  Last Name
                </label>
                <input 
                  type="text" 
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                  placeholder="Your last name" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                <i className="fas fa-envelope mr-2 text-blue-600"></i>
                Email Address
              </label>
              <input 
                type="email" 
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                placeholder="you@example.com" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                <i className="fas fa-phone mr-2 text-blue-600"></i>
                Phone Number
              </label>
              <input 
                type="tel" 
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                placeholder="+92 300 1234567" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                <i className="fas fa-tag mr-2 text-blue-600"></i>
                Subject
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                <option>Select a subject</option>
                <option>Course Information</option>
                <option>Enrollment Questions</option>
                <option>Technical Support</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                <i className="fas fa-comment mr-2 text-blue-600"></i>
                Message
              </label>
              <textarea 
                rows={5} 
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none" 
                placeholder="Tell us how we can help you..."
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-600"></i>
              Visit Us
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">Adrees Railway Road Bannu<br />Near Masjid Bajan, inside Al Faiz Education System (Branch 1)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">0331 5850150<br/>0330 5366199</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@proacademy.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-share-alt text-blue-600"></i>
              Follow Us
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <a href="https://facebook.com" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <i className="fab fa-facebook text-blue-600 text-xl"></i>
                <span className="font-medium">Facebook</span>
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <i className="fab fa-linkedin text-blue-600 text-xl"></i>
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="https://twitter.com" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <i className="fab fa-twitter text-blue-600 text-xl"></i>
                <span className="font-medium">Twitter</span>
              </a>
              <a href="https://instagram.com" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <i className="fab fa-instagram text-blue-600 text-xl"></i>
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

