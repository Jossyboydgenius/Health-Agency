'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Dental Clinic Owner',
    image: '👩‍⚕️',
    rating: 5,
    text: 'HealthCare Plus transformed our online presence. We saw a 300% increase in appointment bookings within just 3 months. Their team truly understands healthcare marketing.'
  },
  {
    name: 'Michael Chen',
    role: 'Wellness Center Director',
    image: '👨‍💼',
    rating: 5,
    text: 'Working with HealthCare Plus has been a game-changer. Their strategies are data-driven and results-oriented. Our patient acquisition cost dropped by 40%!'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Medical Practice Manager',
    image: '👩‍⚕️',
    rating: 5,
    text: 'The best marketing agency we\'ve worked with. They understand HIPAA compliance and create campaigns that resonate with our target audience. Highly recommended!'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it - hear from healthcare professionals who&apos;ve transformed their practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
