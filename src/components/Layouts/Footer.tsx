import { contactInfo } from '../../data/constants';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/LOGO.jpeg" 
                alt="FRAROB Logo" 
                className="w-8 h-8 object-contain rounded"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-bold text-xl">FRAROB</span>
            </div>
            <p className="text-slate-400 text-sm">
              Your trusted partner in creating safe, efficient, and modern infrastructures.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition">Portfolio</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Security Systems</li>
              <li>Safety Systems</li>
              <li>Solar Solutions</li>
              <li>Electrical Works</li>
              <li>Plumbing & Supplies</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>{contactInfo.phone}</p>
              <p className="break-all">{contactInfo.email}</p>
              <p>{contactInfo.address}</p>
            </div>
            <div className="mt-4 text-slate-500 text-xs">
              <p>Incorporated: 16 May, 2025</p>
              <p>PIN: P052432131Z</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FRAROB Investment Limited. All rights reserved.</p>
          <p className="mt-1">Life Line Solutions</p>
        </div>
      </div>
    </footer>
  );
};