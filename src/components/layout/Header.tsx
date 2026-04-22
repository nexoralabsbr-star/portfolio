import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex md:mb-16 md:gap-0 z-10 mb-16 relative gap-x-6 gap-y-6 items-center justify-between font-sans">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 text-zinc-900 group">
        <div className="relative w-12 h-12 rounded-full overflow-hidden transition-transform group-hover:scale-110 shadow-lg border border-zinc-200">
          <Image
            src="/assets/logo.png"
            alt="NexoraLabs Logo"
            fill
            className="object-cover"
          />
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
