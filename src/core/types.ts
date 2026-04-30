
export interface ScheduleItem {
  time: string;
  activity: string;
  location: string;
  description: string;
}

export interface DaySchedule {
  day: string;
  label: string;
  items: ScheduleItem[];
}

export interface Sponsor {
  name: string;
  logo: string;
  tier: 'Diamond' | 'Gold' | 'Silver';
}

export interface Feature {
  title: string;
  description: string;
  icon: string; // Mudado de ReactNode para string para compatibilidade Angular
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
}
