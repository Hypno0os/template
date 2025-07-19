export interface Animal {
  id: string;
  name: string;
  species: string;
  description: string;
  imageUrl?: string;
  soundUrl?: string;
  behaviors: Behavior[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Behavior {
  id: string;
  name: string;
  description: string;
  animalId: string;
  animal?: Animal;
  createdAt: Date;
  updatedAt: Date;
}

export interface Communication {
  id: string;
  title: string;
  content: string;
  animalId?: string;
  animal?: Animal;
  createdAt: Date;
  updatedAt: Date;
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
} 