export interface Service {
  icon: any;
  title: string;
  description: string;
}

export interface Feature {
  text: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  // image: string;
  client: string;
  completedDate: string;
}

export interface ContactInfo {
  phone: string;
  mobile: string,
  email: string;
  address: string;
  poBox: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}