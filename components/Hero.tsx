'use client'

import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-8 animate-slide-up">
            <Sparkles className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-gray-700">Leading Health Marketing Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Transform Your{' '}
            <span className="gradient-text">Health Business</span>
            <br />
            With Expert Marketing
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We help healthcare and wellness brands reach more patients, build trust, and grow their practice through data-driven marketing strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button onClick={scrollToContact} className="btn-primary flex items-center space-x-2">
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">250%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
