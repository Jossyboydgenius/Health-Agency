'use client'

import { Award, Shield, Zap, Heart } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Over 10 years of specialized experience in healthcare marketing'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'All our marketing strategies comply with healthcare regulations'
  },
  {
    icon: Zap,
    title: 'Fast Results',
    description: 'See measurable improvements in your marketing ROI within 90 days'
  },
  {
    icon: Heart,
    title: 'Patient-Focused',
    description: 'We prioritize patient experience in every campaign we create'
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="section-title text-left">
              Why Choose <span className="gradient-text">HealthCare Plus</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re not just another marketing agency. We&apos;re healthcare marketing specialists who understand the unique challenges and opportunities in the health and wellness industry.
            </p>
            <p className="text-gray-600 mb-12">
              Our team combines medical knowledge with cutting-edge marketing strategies to help you attract more patients, build trust, and grow your practice sustainably. We&apos;ve helped hundreds of healthcare providers transform their digital presence and achieve remarkable growth.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">500+</div>
                      <div className="text-gray-600">Successful Projects</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Zap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">98%</div>
                      <div className="text-gray-600">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">24/7</div>
                      <div className="text-gray-600">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
