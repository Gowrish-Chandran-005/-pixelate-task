
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:bg-indigo-700 transition-colors">
            H
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">HackNova</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-indigo-600 ${location.pathname === '/' ? 'text-indigo-600' : 'text-slate-600'}`}
          >
            Home
          </Link>
          
          {user ? (
            <>
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${location.pathname === '/dashboard' ? 'text-indigo-600' : 'text-slate-600'}`}
              >
                Dashboard
              </Link>
              <button 
                onClick={onLogout}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all active:scale-95"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
            >
              Portal Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
