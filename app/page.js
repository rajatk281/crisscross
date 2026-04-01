  "use client"

  import React, { useState } from 'react'
  import { Menu, User } from 'lucide-react'
  import Sidebar from './Components/Sidebar'
  import Name from './Components/Name'
  import Heading_text from './Components/Heading_text'
  import SearchBar from './Components/SearchBar'
  import SignIn from './Components/sign-in'

  const Page = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
      <div className="flex min-h-screen bg-zinc-950 overflow-x-hidden">
        
        <button 
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden fixed top-6 left-6 z-[100] p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white shadow-2xl active:scale-95 transition-transform"
          >
          <Menu size={20} />
        </button>

        <div className="fixed top-6 right-6 z-[100]">
          {/* <button 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all shadow-xl active:scale-95 group"
            aria-label="User Profile"
          >
            <div className="relative">
              <User size={20} />
      
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-zinc-900 rounded-full" />
            </div>
          </button> */}
          <SignIn/>
        </div>

    
        <div className={`fixed inset-y-0 left-0 z-[110] md:relative md:block shrink-0 transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        </div>

    
        {isMobileOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}


        <main className="flex-1 flex flex-col items-center justify-center relative px-4 py-10 sm:p-0">
          <div className="w-full max-w-4xl flex flex-col items-center animate-in fade-in duration-700">
            <div className="mb-2 sm:mb-4">
              <Name />
            </div>
            <div className="mb-6 sm:mb-8">
              <Heading_text />
            </div>
            <div className="w-full">
              <SearchBar />
            </div>
          </div>
          

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        </main>
      </div>
    )
  }

  export default Page