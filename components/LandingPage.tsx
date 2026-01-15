
import React from 'react';
import { Link } from 'react-router-dom';
import { TRACKS, TIMELINE } from '../constants';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
            Engineering the Future
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Unleash Your Innovation at <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">HackNova 2025</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500+ developers, designers, and visionaries for a 48-hour marathon of building, learning, and creating impact. 
            The most prestigious student hackathon is back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/login" 
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
            >
              Register Now
            </Link>
            <a 
              href="#tracks" 
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              View Tracks
            </a>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Innovation Tracks</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Choose a domain that sparks your passion and build something that matters.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRACKS.map((track) => (
              <div 
                key={track.id} 
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-50 transition-all group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{track.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Event Timeline</h2>
            <p className="text-slate-500">Mark your calendars for the journey ahead.</p>
          </div>
          <div className="space-y-6">
            {TIMELINE.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-6 p-6 rounded-2xl transition-all border ${
                  item.status === 'current' 
                  ? 'bg-white border-indigo-200 shadow-md scale-[1.02]' 
                  : item.status === 'completed'
                  ? 'bg-slate-100 border-transparent opacity-60'
                  : 'bg-white border-slate-200'
                }`}
              >
                <div className={`w-24 shrink-0 font-bold ${item.status === 'current' ? 'text-indigo-600' : 'text-slate-400'}`}>
                  {item.date}
                </div>
                <div className="flex-grow">
                  <h4 className={`font-bold ${item.status === 'current' ? 'text-slate-900' : 'text-slate-700'}`}>
                    {item.event}
                  </h4>
                  {item.status === 'current' && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mt-1 block">Happening Now</span>
                  )}
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                  item.status === 'completed' ? 'bg-green-500 border-green-500 text-white' : 
                  item.status === 'current' ? 'border-indigo-600 border-dashed animate-spin-slow' : 
                  'border-slate-300'
                }`}>
                  {item.status === 'completed' && '✓'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
