import { 
  Camera, Shield, Sun, Zap, Wifi, Droplets 
} from 'lucide-react';
import type { Service, PortfolioItem, ContactInfo } from '../types';

export const services: Service[] = [
  { icon: Camera, title: 'Security Systems', description: 'CCTV, intrusion detection, access control, turnstiles, bollards, automatic gates/doors/garage doors/shutter doors, barriers' },
  { icon: Shield, title: 'Safety Systems', description: 'Fire alarm and suppression systems, portable extinguishers, kitchen suppression, room total flooding, hydrant systems' },
  { icon: Sun, title: 'Solar Solutions', description: 'Complete solar PV system supply and installation for residential and commercial properties' },
  { icon: Zap, title: 'Electrical Works', description: 'Full electrical installations, repairs, and maintenance for all property types' },
  { icon: Wifi, title: 'Networking', description: 'Structured cabling, network setup, and other IT solutions' },
  { icon: Droplets, title: 'Plumbing', description: 'Complete plumbing works, supply, and installation services' },
];

export const features: string[] = [
  'One-Stop Solution: Supply & Installation',
  'Quality Assured: Trusted Manufacturer Partners',
  'Customized Energy Solutions',
  'ISO/OSHA Safety Standards Compliant',
  'Qualified & Certified Technicians',
  '24/7 Customer Support'
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Access Control & Surveillance System',
    category: 'Security',
    description: 'Completed access control and surveillance system installation at Kenya Ports Authority substations.',
    // image: '/images/kpa_fire_suppression.jpg',
    client: 'Kenya Ports Authority (KPA)',
    completedDate: '2022 - 2024'
  },
  {
    id: 2,
    title: 'In-cabinet Fire Suppression System',
    category: 'Safety',
    description: 'In-cabinet Fire Suppression and Room Aerosol system installation at KPA (Kenya Ports Authority).',
    // image: '/images/kpa_fire_suppression.jpg',
    client: 'Kenya Ports Authority (KPA)',
    completedDate: '2023 - 2025'
  },
  {
    id: 3,
    title: 'Solar PV Installation',
    category: 'Solar',
    description: 'Commercial solar system installation for reduced energy costs.',
    // image: '/images/solar_installation.jpg',
    client: 'Multiple Commercial Clients',
    completedDate: '2024-2025'
  }
];

export const contactInfo: ContactInfo = {
  phone: '0777778383',
  mobile: '+254 704 374466',
  email: 'info@frarob.co.ke',
  address: 'Canon Towers, Moi Avenue, Mombasa',
  poBox: 'PO Box 90-80100, Mombasa'
};

export const navItems = ['Home', 'Services', 'Portfolio', 'About', 'Contact'];