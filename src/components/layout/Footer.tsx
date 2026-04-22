import React from 'react';

export const Footer = () => {
  return (
    <footer className="z-10 w-full relative pt-16 pb-8 border-t border-zinc-100 mt-24">
      {/* Top Section: Brand + Location */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24">
        {/* Left: Brand */}
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-1">
            <h2 className="leading-none md:text-8xl lg:text-9xl text-6xl font-bold text-zinc-900 tracking-tighter">
              Nexora<span className="text-zinc-300">Labs</span>
            </h2>
          </div>
          <p className="text-zinc-500 md:text-2xl text-xl font-light italic leading-relaxed max-w-md">
            Engenharia de Elite & Inteligência Artificial para Negócios que não aceitam o comum.
          </p>
        </div>

        {/* Right: Location & Time */}
        <div className="flex flex-col gap-6 lg:items-end lg:text-right">
          <div className="flex items-start gap-3 lg:justify-end">
            <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mt-2 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
            <p className="leading-snug md:text-2xl text-zinc-800 text-lg font-medium tracking-tight max-w-sm">
              Operando do Espírito Santo para o mundo. Construindo o amanhã, hoje.
            </p>
          </div>
          <div className="flex flex-col lg:items-end">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <svg aria-hidden="true" height="14" role="img" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 .477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" fill="currentColor" opacity=".3"></path>
                <path d="M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1" fill="currentColor"></path>
              </svg>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Horário Local (BRT)</span>
            </div>
            <p className="md:text-6xl text-4xl font-bold text-zinc-900 tracking-tighter font-mono">
              {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links + Newsletter + Socials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Column 1: Navigation */}
        <div className="flex flex-col gap-5">
          <h4 className="text-[10px] uppercase font-bold text-zinc-400 tracking-[0.2em] mb-2">Navegação</h4>
          <a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors font-semibold" href="/">Home</a>
          <a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors font-semibold" href="/servicos">Soluções</a>
          <a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors font-semibold" href="/especialidades">Arsenal Técnico</a>
          <a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors font-semibold" href="/sobre">Sobre a Nexora</a>
          <a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors font-semibold" href="/contato">Contato</a>
        </div>

        {/* Column 2: Conversão */}
        <div className="flex flex-col gap-5">
          <h4 className="text-[10px] uppercase font-bold text-zinc-400 tracking-[0.2em] mb-2">Próximos Passos</h4>
          <a className="text-base text-zinc-900 hover:text-orange-600 transition-colors font-bold underline decoration-zinc-200 underline-offset-4" href="https://wa.me/seunumeroaqui" target="_blank" rel="noopener noreferrer">Agendar Diagnóstico</a>
          <a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors font-semibold" href="#">Ver Cases</a>
          <a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors font-semibold" href="#">Newsletter</a>
        </div>

        {/* Column 3: Newsletter */}
        <div className="flex flex-col gap-4 lg:col-span-2 bg-zinc-950 rounded-3xl p-8 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-orange-500/20 transition-colors"></div>
          <h3 className="text-xl font-bold tracking-tight z-10">Insights de Elite no seu E-mail</h3>
          <p className="text-sm text-zinc-400 font-medium leading-relaxed z-10">
            Receba estratégias reais de IA e arquitetura de software que geram ROI. Sem spam, apenas valor.
          </p>
          <div className="flex items-center gap-2 border-b border-white/10 pb-2 mt-4 z-10">
            <input className="bg-transparent text-white placeholder:text-zinc-600 outline-none flex-1 text-sm font-medium" placeholder="seu@email.com" type="email" />
            <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-orange-500 hover:text-white transition-all">
              Assinar
            </button>
          </div>
        </div>
      </div>

      {/* Socials & Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 pt-8 border-t border-zinc-100 gap-6">
        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest">LinkedIn</a>
          <a href="#" className="text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest">Instagram</a>
          <a href="#" className="text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest">GitHub</a>
        </div>
        <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-[0.2em]">
          © {new Date().getFullYear()} Nexora Labs • Engineered for Excellence
        </p>
      </div>
    </footer>
  );
};
