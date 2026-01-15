
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Simple login handler
  const handleLogin = (email: string) => {
    setUser({
      email,
      name: email.split('@')[0],
      isLoggedIn: true
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/login" 
              element={user ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} 
            />
            <Route 
              path="/dashboard" 
              element={user ? <DashboardPage user={user} /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-slate-800 pt-8">
      <div>
        <h3 className="text-white text-xl font-bold mb-2">HackNova 2025</h3>
        <p className="max-w-md text-sm leading-relaxed">
          Project Goal: To provide a seamless, professional interface for developers to collaborate and innovate. 
          The UI/UX focuses on visual hierarchy using high-contrast typography and generous whitespace. 
          Responsiveness is handled via mobile-first CSS, ensuring the portal is fully functional from smartphones 
          to ultra-wide displays. Usability is prioritized through clear call-to-actions and intuitive navigation flows.
        </p>
      </div>
      <div className="md:text-right">
        <p className="text-xs uppercase tracking-widest font-semibold mb-4 text-slate-500">Built with React & Tailwind</p>
        <p className="text-sm">© 2025 HackNova Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default App;
