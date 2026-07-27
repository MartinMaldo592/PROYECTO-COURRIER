export type ProductCategory = 'tech' | 'fashion' | 'auto' | 'toys' | 'cosmetics' | 'machinery' | 'other';

export interface DepartmentInfo {
  id: string;
  name: string;
  deliveryDays: string;
  partner: string;
  isFreeLima: boolean;
}

export interface StoreItem {
  id: string;
  name: string;
  category: 'tech' | 'fashion' | 'general' | 'luxury';
  logo: string;
  popularItems: string;
  url: string;
}

export interface FAQItem {
  id: string;
  category: 'rates' | 'shipping' | 'buyforme' | 'customs' | 'guarantee';
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  date: string;
  store: string;
  comment: string;
  savedAmount: string;
  verified: boolean;
}

export interface TrackingStep {
  title: string;
  date: string;
  location: string;
  description?: string;
  completed: boolean;
  active?: boolean;
}

export interface TrackingRecord {
  code: string;
  clientName: string;
  destinationCity: string;
  weightKg: number;
  declaredValueUsd: number;
  currentStatus: string;
  estimatedDelivery: string;
  steps: TrackingStep[];
}
