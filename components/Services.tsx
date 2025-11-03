'use client'

import { Target, TrendingUp, Users, Megaphone, BarChart3, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Digital Strategy',
    description: 'Comprehensive digital marketing strategies tailored to your healthcare business goals and target audience.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and rank higher in search results to attract more patients organically.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Social Media Marketing',
    description: 'Build a strong social presence and engage with your community across all major platforms.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Megaphone,
    title: 'Content Marketing',
    description: 'Create compelling content that educates, engages, and converts your target audience.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights and detailed reports to track your marketing performance and ROI.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Marketing',
    description: 'Reach patients on-the-go with mobile-optimized campaigns and app marketing strategies.',
    color: 'from-pink-500 to-rose-500'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive marketing solutions designed specifically for healthcare and wellness businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
