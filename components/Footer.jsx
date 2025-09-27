import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-footer-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Academy Info */}
          <div className="lg:col-span-1">
            <div className="font-bold text-xl mb-6 flex items-center gap-3 font-heading">
              <img src="/logo.jpeg" alt="The Global English Academy Logo" className="h-8 w-auto" />
              <span className="leading-tight">The Global English Academy</span>
            </div>
            <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">"Empowering Minds, Shaping Futures"</p>
            <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">"Building Skills, Bridging Futures, Mastering Success."</p>
            <p className="text-gray-300 mb-8 text-sm leading-relaxed">We provide affordable, high-quality education using innovative methods and internationally recognized programs.</p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                className="w-12 h-12 bg-primary-blue hover:bg-primary-blue/80 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                className="w-12 h-12 bg-primary-blue hover:bg-primary-blue/80 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a 
                href="https://twitter.com" 
                className="w-12 h-12 bg-primary-blue hover:bg-primary-blue/80 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a 
                href="https://instagram.com" 
                className="w-12 h-12 bg-primary-blue hover:bg-primary-blue/80 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>
          
          {/* Explore Section */}
          <div>
            <div className="font-bold text-lg mb-6 font-heading">
              <span className="text-white">Explore</span>
            </div>
            <ul className="space-y-4">
              <li>
                <Link 
                  className="text-gray-300 hover:text-primary-blue transition-all duration-300 ease-in-out flex items-center gap-2 group" 
                  href="/courses"
                >
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                Courses
                </Link>
              </li>
              <li>
                <Link 
                  className="text-gray-300 hover:text-primary-blue transition-all duration-300 ease-in-out flex items-center gap-2 group" 
                  href="/teachers"
                >
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                Teachers
                </Link>
              </li>
              <li>
                <Link 
                  className="text-gray-300 hover:text-primary-blue transition-all duration-300 ease-in-out flex items-center gap-2 group" 
                  href="/about"
                >
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                About Us
                </Link>
              </li>
              <li>
                <Link 
                  className="text-gray-300 hover:text-primary-blue transition-all duration-300 ease-in-out flex items-center gap-2 group" 
                  href="/contact"
                >
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info Section */}
          <div>
            <div className="font-bold text-lg mb-6 font-heading">
              <span className="text-white">Contact Info</span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 group">
                <i className="fas fa-map-marker-alt mt-1 text-white text-lg group-hover:text-white/80 transition-colors duration-300"></i>
                <span className="text-gray-300 leading-relaxed">Railway Road Bannu, Near Masjid Bajan, inside Al Faiz Education System (Branch 1)</span>
              </div>
              <div className="flex items-center gap-3 group">
                <i className="fas fa-phone text-white text-lg group-hover:text-white/80 transition-colors duration-300"></i>
                <div className="flex flex-col gap-1">
                  <a 
                    href="tel:+923315850150" 
                    className="text-gray-300 hover:text-primary-blue transition-colors duration-300"
                  >
                    0331 5850150
                  </a>
                  <a 
                    href="tel:+923305366199" 
                    className="text-gray-300 hover:text-primary-blue transition-colors duration-300"
                  >
                    0330 5366199
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <i className="fas fa-envelope text-white text-lg group-hover:text-white/80 transition-colors duration-300"></i>
                <a 
                  href="mailto:info@globalenglishacademy.com" 
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300"
                >
                  info@globalenglishacademy.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Location Section */}
          <div>
            <div className="font-bold text-lg mb-6 font-heading">
              <span className="text-white">Find Us on the Map</span>
            </div>
            <div className="h-40 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d70.6!3d32.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU4JzQ4LjAiTiA3MMKwMzYnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10 bg-footer-darker">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300">
              © {new Date().getFullYear()} The Global English Academy, Bannu. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-sm text-gray-300">
                Developed by{' '}
                <a 
                  href="https://www.linkedin.com/in/noor-ul-amin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-blue hover:text-blue-300 transition-colors duration-300 font-medium"
                >
                  Noor ul Amin
                </a>
              </div>
              <div className="flex gap-6 text-sm">
                <Link 
                  href="/privacy" 
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300 ease-in-out"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300 ease-in-out"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-primary-blue transition-colors duration-300 ease-in-out"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
