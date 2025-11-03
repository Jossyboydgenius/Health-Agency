'use client'

import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">HealthCare Plus</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming healthcare businesses through innovative marketing strategies and data-driven results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Digital Strategy</li>
              <li className="text-gray-400">SEO Optimization</li>
              <li className="text-gray-400">Social Media Marketing</li>
              <li className="text-gray-400">Content Marketing</li>
              <li className="text-gray-400">Analytics & Reporting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Healthcare Ave, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">hello@healthcareplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 HealthCare Plus. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
