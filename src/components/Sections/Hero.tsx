import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm">Life Line Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Empower Your
              <span className="text-gradient block">Safe & Secure</span>
              Environment
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              Expert installations of security, safety, solar, electrical, networking, and plumbing systems for residential and commercial clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center space-x-2 glass-effect hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Our Services</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              <img
                src="/images/security_installation.jpg"
                alt="Security Installation"
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};