import React from 'react'

const Name = () => {
  return (

    <div className="p-4 text-center inline-flex flex-col items-center sm:items-start cursor-default group max-w-full">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none select-none">
        <span className="text-white transition-colors duration-300 group-hover:text-zinc-200">
          Criss
        </span>
        <span className="bg-gradient-to-br from-purple-300 via-purple-500 to-purple-800 bg-clip-text text-transparent">
          Cross
        </span>
      </h1>
      
      <div className="h-[2px] w-8 sm:w-16 bg-gradient-to-r from-purple-400 via-zinc-200 to-transparent opacity-50 mt-2 transition-all duration-700 ease-in-out group-hover:w-full" />
    </div>
  )
}

export default Name