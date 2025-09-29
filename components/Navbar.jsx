import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

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
        <div className="hidden md:flex items-center gap-3">
          <Button href="/enroll" variant="secondary" size="sm">Enroll</Button>
          <Button href="/courses" variant="primary" size="sm">Get Started</Button>
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
            <Link 
              href="/" 
              className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              href="/teachers" 
              className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Teachers
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-text hover:text-primary-blue transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t">
              <Button 
                href="/courses" 
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
