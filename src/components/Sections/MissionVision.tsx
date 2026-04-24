import { SectionWrapper } from '../UI/SectionWrapper';

export const MissionVision = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-slate-200 font-semibold leading-relaxed">
              "To empower our clients with safe, energy-efficient, and secure environments through expert installations and reliable supplies."
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};