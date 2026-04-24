import { Hero } from './components/Sections/Hero';
import { MissionVision } from './components/Sections/MissionVision';
import { Services } from './components/Sections/Services';
import { Portfolio } from './components/Sections/Portfolio';
import { WhyChooseUs } from './components/Sections/WhyChooseUs';
import { About } from './components/Sections/About';
import { Contact } from './components/Sections/Contact';
import { useScrollToTop } from './hooks/useScrollToTop';
import { Footer } from './components/Layouts/Footer';
import { Navbar } from './components/Layouts/Navbar';
import { ScrollToTop } from './components/Layouts/ScrollToTop';
import { PWAInstallPrompt } from './components/UI/PWAInstallPrompt';

function App() {
  const { showScrollTop, scrollToTop } = useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <Hero />
      <MissionVision />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
      <PWAInstallPrompt />
    </div>
  );
}

export default App;