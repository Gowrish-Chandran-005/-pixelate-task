
import React from 'react';
import { User } from '../types';

interface DashboardPageProps {
  user: User;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user }) => {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Welcome back, <span className="text-indigo-600">{user.name}</span> 👋
          </h1>
          <p className="text-slate-500">Manage your projects, team, and event schedule from here.</p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-semibold border border-indigo-100">
            Hacker ID: #H-2901
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Status Card */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm col-span-1 lg:col-span-2">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Current Progress</h3>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-slate-600">Project Milestone: Ideation</span>
                <span className="text-sm font-bold text-indigo-600">75%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-3/4 rounded-full shadow-inner"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl text-center">
                <p className="text-xs text-slate-500 uppercase tracking-tighter mb-1 font-semibold">Team Size</p>
                <p className="text-xl font-bold text-slate-900">4 / 4</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl text-center">
                <p className="text-xs text-slate-500 uppercase tracking-tighter mb-1 font-semibold">Track</p>
                <p className="text-xl font-bold text-slate-900">AI/ML</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl text-center">
                <p className="text-xs text-slate-500 uppercase tracking-tighter mb-1 font-semibold">Submission</p>
                <p className="text-xl font-bold text-amber-500">Pending</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl text-center">
                <p className="text-xs text-slate-500 uppercase tracking-tighter mb-1 font-semibold">Ranking</p>
                <p className="text-xl font-bold text-slate-900">--</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Card */}
        <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl shadow-indigo-100">
          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
          <ul className="space-y-3">
            <li>
              <button className="w-full text-left p-4 bg-indigo-500/30 hover:bg-indigo-500/50 rounded-xl transition-all font-medium border border-indigo-400/20">
                Submit MVP Draft
              </button>
            </li>
            <li>
              <button className="w-full text-left p-4 bg-indigo-500/30 hover:bg-indigo-500/50 rounded-xl transition-all font-medium border border-indigo-400/20">
                Request Mentor Help
              </button>
            </li>
            <li>
              <button className="w-full text-left p-4 bg-indigo-500/30 hover:bg-indigo-500/50 rounded-xl transition-all font-medium border border-indigo-400/20">
                View API Documentation
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Notifications / Feed */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Announcements</h3>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0"></div>
            <div>
              <p className="text-slate-900 font-semibold mb-1">Check-in process starts at 9:00 AM</p>
              <p className="text-slate-500 text-sm">Please carry your digital ID card for thermal scanning at the main gate.</p>
              <span className="text-[10px] text-slate-400 uppercase mt-2 block">2 hours ago</span>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-2 h-2 rounded-full bg-slate-300 mt-2 shrink-0"></div>
            <div>
              <p className="text-slate-900 font-semibold mb-1">AWS Credits are now available</p>
              <p className="text-slate-500 text-sm">Collect your $100 credit code from the dashboard profile section.</p>
              <span className="text-[10px] text-slate-400 uppercase mt-2 block">5 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
