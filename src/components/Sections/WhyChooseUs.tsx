import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { features } from '../../data/constants';
import { SectionWrapper } from '../UI/SectionWrapper';

export const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose
              <span className="text-gradient"> FRAROB?</span>
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <div className="relative">
              <img
                src="/images/expert_technician.jpg"
                alt="Expert Technicians"
                className="rounded-2xl shadow-2xl w-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop';
                }}
              />
              <div className="absolute -bottom-4 -right-4 glass-effect rounded-xl p-4 backdrop-blur-md">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="font-bold">Certified Experts</p>
                    <p className="text-xs text-slate-400">ISO/OSHA Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};