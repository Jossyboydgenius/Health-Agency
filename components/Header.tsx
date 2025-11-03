'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Heart } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">HealthCare Plus</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Book Appointment
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              About
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full text-center"
            >
              Book Appointment
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
