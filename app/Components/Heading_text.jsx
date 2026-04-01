import React from 'react'

const Heading_text = () => {
  return (
    <div className="text-center mt-2 mb-8 max-w-[90%] sm:max-w-md md:max-w-lg mx-auto px-2 group">
      <p className="text-xs sm:text-sm md:text-base font-medium text-zinc-400 tracking-tight leading-relaxed sm:leading-normal transition-colors duration-300 group-hover:text-zinc-300">
        Automate actions and sync workflows seamlessly 
        <span className="block sm:inline text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text font-semibold"> 
          {" "}across any browser.
        </span>
      </p>
    </div>
  )
}

export default Heading_text