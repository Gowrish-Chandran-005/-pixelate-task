
export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  date: string;
  event: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface User {
  email: string;
  name: string;
  isLoggedIn: boolean;
}
