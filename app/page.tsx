'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Car, Home, Heart, Briefcase, Umbrella,
  CheckCircle, ArrowRight, Star, Users, Clock,
  Phone, Mail, ChevronDown
} from 'lucide-react';

const insuranceTypes = [
  { id: 'auto', name: 'Auto Insurance', icon: Car, color: 'from-blue-500 to-indigo-600', desc: 'Protect your vehicles' },
  { id: 'home', name: 'Home Insurance', icon: Home, color: 'from-emerald-500 to-teal-600', desc: 'Protect your property' },
  { id: 'life', name: 'Life Insurance', icon: Heart, color: 'from-rose-500 to-pink-600', desc: 'Protect your family' },
  { id: 'health', name: 'Health Insurance', icon: Shield, color: 'from-purple-500 to-violet-600', desc: 'Protect your health' },
  { id: 'business', name: 'Business Insurance', icon: Briefcase, color: 'from-amber-500 to-orange-600', desc: 'Protect your business' },
  { id: 'umbrella', name: 'Umbrella Policy', icon: Umbrella, color: 'from-cyan-500 to-blue-600', desc: 'Extra liability coverage' },
];

const partners = [
  'State Farm', 'Geico', 'Progressive', 'Allstate', 'USAA', 'Liberty Mutual',
  'Nationwide', 'Farmers', 'Travelers', 'American Family'
];

const stats = [
  { value: '$847', label: 'Average Annual Savings' },
  { value: '50+', label: 'Insurance Partners' },
  { value: '2 min', label: 'To Get Quotes' },
  { value: '4.9/5', label: 'Customer Rating' },
];

export default function InsurancePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: '',
    email: '',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Javari Insurance</span>
                <span className="text-blue-400 text-xs block -mt-1">by CR AudioViz AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#types" className="text-gray-300 hover:text-white transition">Coverage Types</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#partners" className="text-gray-300 hover:text-white transition">Partners</a>
              <a href="#quote" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 mb-8"
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Trusted by 100,000+ customers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Compare Insurance Quotes<br/>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Save Up to $847/Year
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Get personalized quotes from 50+ top insurance providers in minutes. 
            No spam calls, no commitments - just great rates.
          </motion.p>

          {/* Quick Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                Get Free Quotes
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-3">No spam. No commitments. Just great rates.</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insurance Types */}
      <section id="types" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Coverage for Every Need
            </h2>
            <p className="text-xl text-gray-400">
              Select your insurance type to get personalized quotes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceTypes.map((type, i) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedType(type.id)}
                className={`group p-6 bg-white/5 border rounded-2xl text-left transition-all hover:scale-105 ${
                  selectedType === type.id 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${type.color} mb-4`}>
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{type.name}</h3>
                <p className="text-gray-400">{type.desc}</p>
                {selectedType === type.id && (
                  <div className="mt-4 flex items-center gap-2 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Selected</span>
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {selectedType && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition"
              >
                Get {insuranceTypes.find(t => t.id === selectedType)?.name} Quotes
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400">
              Get quotes in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Tell Us About Yourself', desc: 'Answer a few quick questions about your coverage needs', icon: Users },
              { step: 2, title: 'Compare Quotes', desc: 'See personalized quotes from 50+ top insurance providers', icon: CheckCircle },
              { step: 3, title: 'Save Money', desc: 'Choose the best policy and start saving immediately', icon: Star },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative p-6 bg-slate-900/50 border border-white/10 rounded-2xl"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <item.icon className="w-10 h-10 text-blue-400 mb-4 mt-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-400">
              We work with America&apos;s top insurance providers
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Save on Insurance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join over 100,000 customers who have saved an average of $847/year
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/quote"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-2"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:1-800-JAVARI"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              1-800-JAVARI
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">Javari Insurance</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
