import React, { useState } from 'react';

export const Header: React.FC = () => {

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTicketsMenuOpen, setIsTicketsMenuOpen] = useState(false);


  return (
    <nav
    className="sticky top-0 z-10 flex bg-gradient-to-r from-rose-500 to-pink-500 text-zinc-200"
  >
    <div className="flex items-center gap-2 p-2 ">
      <img src="/images/logo-inverted.png" width="50" />
      <div className="text-2xl font-bold">
        tw:<span className="text-sky-900">mf</span>
      </div>
    </div>
    <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
      <button 
        id="mobile-menu-button"
        className={`group peer ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div
          className="relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:top-2 group-open:rotate-45"
        ></div>
        <div
          className="mt-1 h-1 w-8 rounded-full bg-zinc-200 opacity-100 transition-all group-open:opacity-0"
        ></div>
        <div
          className="relative top-0 mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:-top-2 group-open:-rotate-45"
        ></div>
      </button>
      <div
        className="absolute left-0 top-[62px] hidden w-full bg-gradient-to-r from-rose-500 to-pink-500 peer-open:block"
      >
        <div
          className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 transition-colors hover:bg-white/10 hover:text-zinc-200"
        >
          <span>Home</span>
        </div>
        <div
          className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 transition-colors hover:bg-white/10 hover:text-zinc-200"
        >
          <span>Lineup</span>
        </div>
        <div
         id="ticket-menu-item"
         className={`group relative h-full cursor-pointer text-pink-200 transition-colors hover:bg-white/10 hover:text-zinc-200 ${isTicketsMenuOpen ? 'open' : ''}`}
         onClick={() => setIsTicketsMenuOpen(!isTicketsMenuOpen)} 
        >
          <div className="p-4 text-center font-bold">Tickets</div>
          <div className="hidden group-open:block">
            <div
              className="relative p-4 text-center text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200"
            >
              <span>Single day ticket</span>
            </div>
            <div
              className="relative p-4 text-center text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200"
            >
              <span>7 day ticket</span>
            </div>
          </div>
        </div>
        <div
          className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 transition-colors hover:bg-white/10 hover:text-zinc-200"
        >
          <span>Support</span>
        </div>
      </div>
    </div>
    <div className="hidden flex-1 items-center justify-end md:flex">
      <div className="menu-item">
        <span>Home</span>
      </div>
      <div className="menu-item">
        <span>Lineup</span>
      </div>
      <div className="menu-item group">
        <span>Tickets</span>
        <div
          className="absolute right-0 top-full hidden whitespace-nowrap rounded-b-md bg-pink-500 text-right group-hover:block"
        >
          <div
            className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200"
          >
            <span>Single day ticket</span>
          </div>
          <div
            className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200"
          >
            <span>7 day ticket</span>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <span>Support</span>
      </div>
    </div>
  </nav>
  )
}
