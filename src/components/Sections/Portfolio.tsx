import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Briefcase } from 'lucide-react';
import { portfolioItems } from '../../data/constants';
import { SectionWrapper } from '../UI/SectionWrapper';

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Showcasing our successful installations and satisfied clients
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
          </div>
        </SectionWrapper>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'glass-effect text-slate-300 hover:text-cyan-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <SectionWrapper key={item.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl overflow-hidden hover-glow cursor-pointer group"
              >
                {/* <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div> */}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.completedDate}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-xs">
                      <Briefcase className="w-3 h-3 mr-1" />
                      {item.client}
                    </div>
                    <ExternalLink className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};