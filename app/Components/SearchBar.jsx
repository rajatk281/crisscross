"use client"

import React, { useState } from 'react';
import { Plus, Mic, AudioLines, ArrowUp } from 'lucide-react';

const SearchBar = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-6 mb-10 sm:mb-20">

      <div className="flex items-center gap-1 sm:gap-2 bg-[#2f2f2f] rounded-full p-1.5 pl-3 sm:p-2 sm:pl-4 border border-white/5 shadow-lg focus-within:border-white/10 transition-all duration-200">
        
        <button 
          className="flex items-center justify-center text-zinc-400 hover:text-white transition-colors p-1.5 sm:p-1 shrink-0"
          aria-label="Add attachment"
        >
          <Plus size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2} />
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything"

          className="flex-1 bg-transparent text-white placeholder-zinc-500 text-base outline-none caret-white min-w-0 py-1 sm:py-0"
        />
 
        <button 
          className="flex items-center justify-center text-zinc-400 hover:text-white transition-colors p-1.5 shrink-0"
          aria-label="Voice input"
        >
          <Mic size={18} className="sm:w-[20px] sm:h-[20px]" />
        </button>

        <button
          className={`flex items-center justify-center rounded-full w-8 h-8 sm:w-9 sm:h-9 transition-all duration-200 shrink-0
            ${message.trim() 
              ? 'bg-white text-black hover:bg-zinc-200' 
              : 'bg-white text-black hover:bg-zinc-200'}`}
          aria-label={message.trim() ? "Send message" : "Voice message"}
        >
          {message.trim() ? (
            <ArrowUp size={18} className="sm:w-[20px] sm:h-[20px]" strokeWidth={2.5} />
          ) : (
            <AudioLines size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;