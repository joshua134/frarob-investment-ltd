import { motion } from 'framer-motion';
import { Home, Factory, Building2, Shield } from 'lucide-react';
import { SectionWrapper } from '../UI/SectionWrapper';

export const About = () => {
  const categories = [
    { icon: Home, label: 'Residential', color: 'bg-blue-500/20' },
    { icon: Factory, label: 'Commercial', color: 'bg-cyan-500/20' },
    { icon: Building2, label: 'Industrial', color: 'bg-purple-500/20' },
    { icon: Shield, label: '24/7 Support', color: 'bg-green-500/20' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"></div>
            <p className="text-slate-300 leading-relaxed mb-4">
              At <span className="font-semibold text-cyan-400">Frarob Investment Limited</span>, we are more than just a supplier; we are your partners in creating safe, efficient, and modern infrastructures. With years of practical experience, we specialize in the comprehensive supply and expert installation of electrical, plumbing, solar PV systems, and advanced security solutions.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Serving both residential and commercial clients, we bring expertise to every project—from simple household electrical repairs to complex industrial solar setups. Our qualified technicians are committed to quality, adhering strictly to safety standards (ISO/OSHA) to ensure every installation is secure and compliant.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We take pride in delivering peace of mind, knowing your systems are installed right the first time.
            </p>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`${item.color} rounded-xl p-6 text-center backdrop-blur-sm`}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-white" />
                  <p className="font-semibold">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};