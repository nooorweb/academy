import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-dark-text flex items-center gap-2 font-heading">
          <img src="/logo.jpeg" alt="The Global English Academy" className="h-8 w-auto" />
          The Global English Academy
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-gray-text hover:text-primary-blue transition-colors duration-300 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/courses" className="text-gray-text hover:text-primary-blue transition-colors duration-300 relative group">
            Courses
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/teachers" className="text-gray-text hover:text-primary-blue transition-colors duration-300 relative group">
            Teachers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-gray-text hover:text-primary-blue transition-colors duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-gray-text hover:text-primary-blue transition-colors duration-300 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/courses" 
            className="bg-primary-gradient text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl button-font"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl text-gray-text`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <nav className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium">
              Home
            </Link>
            <Link href="/courses" className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium">
              Courses
            </Link>
            <Link href="/teachers" className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium">
              Teachers
            </Link>
            <Link href="/about" className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium">
              About
            </Link>
            <Link href="/contact" className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium">
              Contact
            </Link>
            <div className="pt-4 border-t">
              <Link 
                href="/courses" 
                className="block bg-primary-gradient text-white px-6 py-3 rounded-full text-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg button-font"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
