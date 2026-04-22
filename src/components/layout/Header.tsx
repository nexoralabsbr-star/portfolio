import React from 'react';

export const Header = () => {
  return (
    <header className="flex md:mb-16 md:gap-0 z-10 mb-16 relative gap-x-6 gap-y-6 items-center justify-between font-sans">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 text-zinc-900 group">
        <div 
          className="flex text-white bg-gradient-to-b from-black/60 to-black/20 w-8 h-8 rounded-full items-center justify-center transition-transform group-hover:scale-110" 
          style={{ 
            position: 'relative', 
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1))', 
            '--border-radius-before': '9999px' 
          } as React.CSSProperties}
        >
          <svg aria-hidden="true" className="w-[16px] h-[16px]" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{ width: '16px', height: '16px', color: 'rgb(255, 255, 255)' }} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" fill="#ffffff" opacity=".5"></path>
            <path d="M9.5 8.75A3.25 3.25 0 1 0 12.75 12a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 1 9.5 7.25a.75.75 0 0 1 0 1.5" fill="#ffffff"></path>
            <path d="M17.75 12a3.25 3.25 0 0 1-3.25 3.25a.75.75 0 0 0 0 1.5A4.75 4.75 0 1 0 9.75 12a.75.75 0 0 0 1.5 0a3.25 3.25 0 0 1 6.5 0" fill="#ffffff"></path>
          </svg>
        </div>
        <span className="text-lg font-semibold tracking-tighter uppercase">Nexora<span className="text-zinc-400 font-light">Labs</span></span>
      </a>

      {/* Navigation */}
      <nav className="hidden md:flex uppercase text-[10px] font-bold text-zinc-500 tracking-[0.2em] bg-white/50 border-white/60 border rounded-full pt-2.5 pr-8 pb-2.5 pl-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.05),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md gap-x-8 items-center">
        <a className="hover:text-zinc-900 transition-colors duration-300" href="/">Início</a>
        <a className="hover:text-zinc-900 transition-colors duration-300" href="/servicos">Serviços</a>
        <a className="hover:text-zinc-900 transition-colors duration-300" href="/especialidades">Arsenal</a>
        <a className="hover:text-zinc-900 transition-colors duration-300" href="/sobre">Sobre</a>
        <a className="hover:text-zinc-900 transition-colors duration-300" href="/contato">Contato</a>
      </nav>

      {/* CTA */}
      <a className="transition-all flex items-center gap-2 group hover:bg-zinc-900 hover:text-white text-[11px] font-bold uppercase tracking-widest bg-white border border-zinc-200 rounded-full py-2.5 px-6 shadow-sm" 
         href="https://wa.me/seunumeroaqui" 
         target="_blank"
         rel="noopener noreferrer"
      >
        <span>Diagnóstico Gratuito</span>
        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      </a>
    </header>
  );
};
