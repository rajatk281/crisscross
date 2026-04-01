"use client"

import React, { useState } from 'react';
import { Menu, X, DollarSign, Info, HelpCircle, Command } from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { name: 'Pricing', icon: <DollarSign size={20} />, href: '#pricing' },
    { name: 'About', icon: <Info size={20} />, href: '#about' },
    { name: 'Help', icon: <HelpCircle size={20} />, href: '#help' },
  ];

  return (
    <>
     
      <div className="md:hidden fixed top-6 left-6 z-[100]"> 
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileOpen(true);
          }}
          className="p-3 rounded-2xl bg-zinc-900/90 backdrop-blur-xl text-white border border-white/10 shadow-2xl active:scale-95 transition-all"
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[80] md:hidden transition-opacity duration-500 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileOpen(false)}
      />


      <aside
        className={`fixed top-0 left-0 h-screen z-[90] flex flex-col justify-between
          bg-zinc-950 text-white border-r border-white/5 shadow-2xl
          transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isCollapsed ? 'md:w-20' : 'md:w-64'} 
          ${isMobileOpen ? 'translate-x-0 w-[280px]' : '-translate-x-full md:translate-x-0'}`}
      >
        <div>
          
          <div className="flex items-center justify-between p-6 border-b border-white/5 h-24">
            {(!isCollapsed || isMobileOpen) && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                  <Command className="text-purple-400" size={20} />
                </div>
                <span className="font-bold text-lg tracking-tight">Console</span>
              </div>
            )}

            {/* Close Button for Mobile */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden p-2 rounded-xl bg-white/5 text-zinc-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Collapse Toggle for Desktop */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:block p-2 rounded-lg text-zinc-500 hover:text-white transition-colors"
            >
              <Menu size={18} />
            </button>
          </div>

        
          <nav className="flex flex-col gap-2 p-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`flex items-center gap-4 p-3.5 rounded-xl text-sm font-medium transition-all
                  text-zinc-400 hover:bg-white/[0.05] hover:text-white group
                  ${isCollapsed && !isMobileOpen ? 'justify-center' : 'justify-start'}`}
              >
                <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                {(!isCollapsed || isMobileOpen) && <span>{item.name}</span>}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="p-6 border-t border-white/5 bg-zinc-950/50">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold text-center">
            {(!isCollapsed || isMobileOpen) ? '© 2026 CrissCross' : 'CC'}
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;