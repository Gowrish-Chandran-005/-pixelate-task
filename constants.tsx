
import { Track, TimelineEvent } from './types';

export const TRACKS: Track[] = [
  {
    id: '1',
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems that solve real-world problems using predictive modeling and neural networks.',
    icon: '🤖'
  },
  {
    id: '2',
    title: 'Sustainable Future',
    description: 'Develop eco-friendly tech solutions focusing on renewable energy, carbon footprint reduction, or circular economy.',
    icon: '🌿'
  },
  {
    id: '3',
    title: 'Decentralized Web',
    description: 'Explore the boundaries of Web3, blockchain, and decentralized protocols for a more transparent internet.',
    icon: '⛓️'
  }
];

export const TIMELINE: TimelineEvent[] = [
  { date: 'Oct 15', event: 'Registration Opens', status: 'completed' },
  { date: 'Nov 01', event: 'Team Formation & Mentorship', status: 'current' },
  { date: 'Nov 15', event: 'Hacking Period Begins', status: 'upcoming' },
  { date: 'Nov 17', event: 'Final Pitching & Awards', status: 'upcoming' }
];
