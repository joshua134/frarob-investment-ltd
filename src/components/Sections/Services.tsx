import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { services } from '../../data/constants';
import { SectionWrapper } from '../UI/SectionWrapper';

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-xl p-6 hover-glow cursor-pointer"
              >
                <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper delay={0.6}>
          <div className="mt-8 glass-effect rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Globe2 className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-bold">General Supplies</h3>
            </div>
            <p className="text-slate-400">
              Comprehensive procurement and supply services for all your business and project needs
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};