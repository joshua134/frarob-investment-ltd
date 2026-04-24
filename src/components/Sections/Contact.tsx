import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle, Smartphone  } from 'lucide-react';
import { contactInfo } from '../../data/constants';
import { SectionWrapper } from '../UI/SectionWrapper';

declare global {
  interface Window {
    grecaptcha: any;
  }
}


declare global {
  interface Window {
    grecaptcha: any;
    onloadRecaptchaCallback?: () => void;
  }
}

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isFormValid, setIsFormValid] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaWidgetId = useRef<number | null>(null);

  // Load Google reCAPTCHA v2
  useEffect(() => {
    // Define the callback function that will be called when reCAPTCHA loads
    const loadRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render) {
        setRecaptchaReady(true);
      }
    };

    // Check if reCAPTCHA is already loaded
    if (window.grecaptcha && window.grecaptcha.render) {
      setRecaptchaReady(true);
    } else {
      // Add callback to window
      window.onloadRecaptchaCallback = loadRecaptcha;
      
      // Load the script if not already present
      if (!document.querySelector('#recaptcha-script')) {
        const script = document.createElement('script');
        script.id = 'recaptcha-script';
        script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadRecaptchaCallback&render=explicit';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }

    // Cleanup
    return () => {
      delete window.onloadRecaptchaCallback;
    };
  }, []);

  // Render reCAPTCHA widget when ready
  useEffect(() => {
    if (recaptchaReady && window.grecaptcha && !recaptchaToken && recaptchaWidgetId.current === null) {
      const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const container = document.getElementById('recaptcha-container');
        if (container && container.innerHTML === '') {
          try {
            recaptchaWidgetId.current = window.grecaptcha.render('recaptcha-container', {
              sitekey: siteKey,
              callback: (token: string) => {
                console.log('reCAPTCHA completed successfully');
                setRecaptchaToken(token);
              },
              'expired-callback': () => {
                console.log('reCAPTCHA expired');
                setRecaptchaToken(null);
                recaptchaWidgetId.current = null;
              },
              'error-callback': () => {
                console.error('reCAPTCHA error');
                setRecaptchaToken(null);
              }
            });
          } catch (error) {
            console.error('reCAPTCHA render error:', error);
          }
        }
      }, 100);
    }
  }, [recaptchaReady, recaptchaToken]);

  // Check if form is valid whenever form data or recaptcha changes
  useEffect(() => {
    const isValid = formData.name.trim() !== '' && 
                    formData.email.trim() !== '' && 
                    formData.message.trim() !== '' &&
                    recaptchaToken !== null &&
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    setIsFormValid(isValid);
  }, [formData, recaptchaToken]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields (Name, Email, Message)' });
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
      return;
    }

    if (!recaptchaToken) {
      setSubmitStatus({ type: 'error', message: 'Please complete the reCAPTCHA verification' });
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/MUHOLOFRANCIS2025@GMAIL.COM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Quote Request from ${formData.name} - FRAROB Investment Limited`,
          _replyto: formData.email,
          _template: 'table',
        })
      });

      const data = await response.json();
      
      if (response.ok && data.success !== false) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.' });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        
        // Reset reCAPTCHA
        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
          setRecaptchaToken(null);
        }
        
        // Scroll to show success message
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Sorry, there was an error sending your message. Please try again or call us directly at 0777778383.' });
      // Reset reCAPTCHA on error
      if (window.grecaptcha && recaptchaWidgetId.current !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.current);
        setRecaptchaToken(null);
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 8000);
    }
  };

  const contactDetails = [
    { icon: Smartphone, title: 'Phone / WhatsApp', content: contactInfo.mobile, link: `tel:${contactInfo.mobile}`, linkText: 'Call Now'},
    { icon: Phone, title: 'Phone / WhatsApp', content: contactInfo.phone, link: `tel:${contactInfo.phone}`, linkText: 'Call Now' },
    { icon: Mail, title: 'Email', content: contactInfo.email, link: `mailto:${contactInfo.email}`, linkText: 'Send Email' },
    { icon: MapPin, title: 'Address', content: contactInfo.address, subContent: contactInfo.poBox },
    { icon: Clock, title: 'Business Hours', content: 'Monday - Friday: 8:00 AM - 6:00 PM', subContent: 'Saturday: 9:00 AM - 4:00 PM', extraSub: 'Sunday: Closed' },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-400">Ready to secure your environment? Contact us today!</p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          <SectionWrapper>
            <div className="space-y-6">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 glass-effect rounded-xl p-4">
                  <item.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-400">{item.content}</p>
                    {item.subContent && <p className="text-slate-400 text-sm">{item.subContent}</p>}
                    {item.extraSub && <p className="text-slate-400 text-sm">{item.extraSub}</p>}
                    {item.link && <a href={item.link} className="text-cyan-400 text-sm hover:underline">{item.linkText}</a>}
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-6 space-y-4">
              {submitStatus.type === 'success' && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-400 text-sm font-semibold">Success!</p>
                    <p className="text-green-400/80 text-sm">{submitStatus.message}</p>
                  </div>
                </div>
              )}
              {submitStatus.type === 'error' && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-400 text-sm font-semibold">Error!</p>
                    <p className="text-red-400/80 text-sm">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="John Doe" 
                  className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors"
                  disabled={isSubmitting}
                />
                {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                  <p className="text-red-400 text-xs mt-1">Please enter a valid email address</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Phone Number <span className="text-slate-500 text-xs">(Optional)</span>
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  placeholder="0712345678" 
                  className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Service Interested In <span className="text-slate-500 text-xs">(Optional)</span>
                </label>
                <select 
                  name="service" 
                  value={formData.service} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors"
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  <option value="Security Systems">Security Systems (CCTV, Access Control, Gates)</option>
                  <option value="Safety Systems">Safety Systems (Fire Alarms, Suppression)</option>
                  <option value="Solar Solutions">Solar PV Systems</option>
                  <option value="Electrical Works">Electrical Installation & Repairs</option>
                  <option value="Networking">Networking & IT Infrastructure</option>
                  <option value="Plumbing">Plumbing Works & Supplies</option>
                  <option value="General Supplies">General Supplies</option>
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Message / Project Details <span className="text-red-400">*</span>
                </label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  rows={4} 
                  placeholder="Tell us about your project, requirements, or any questions you have..." 
                  className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Google reCAPTCHA v2 */}
              <div className="flex justify-center py-2">
                <div id="recaptcha-container" className="recaptcha-wrapper"></div>
              </div>
              
              {/* Show loading or error states */}
              {!recaptchaReady && (
                <p className="text-slate-400 text-xs text-center">Loading reCAPTCHA...</p>
              )}
              {recaptchaReady && !recaptchaToken && (
                <p className="text-amber-400 text-xs text-center">✓ Please verify you're not a robot by checking the box above</p>
              )}
              {recaptchaToken && (
                <p className="text-green-400 text-xs text-center">✓ reCAPTCHA verified successfully!</p>
              )}
              
              <div className="text-xs text-slate-500 text-center">
                <span className="text-red-400">*</span> Required fields
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || !isFormValid}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isFormValid && !isSubmitting
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 hover:scale-[1.02] cursor-pointer'
                    : 'bg-slate-700 cursor-not-allowed opacity-50'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:underline mx-1" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                and
                <a href="https://policies.google.com/terms" className="text-cyan-400 hover:underline mx-1" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                apply.
              </p>
            </form>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};