export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  iconName: string;
  shortDesc: string;
  benefit: string;
  idealFor: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'landing' | 'automation' | 'web' | 'soporte';
  description: string;
  solution: string;
  tags: string[];
  metrics: string;
  demoUrl?: string;
  imagePlaceholder: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  commercialPitch: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
  defaultMessage: string;
}
