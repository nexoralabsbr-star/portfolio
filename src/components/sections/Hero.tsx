import React from 'react';

export const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 h-full flex-grow relative z-10 pb-8 lg:pb-0">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col pt-4 relative justify-center">
          {/* Social Proof Pill */}
          <div className="inline-flex bg-white/60 w-max rounded-full mb-8 pt-1.5 pr-5 pb-1.5 pl-1.5 shadow-sm backdrop-blur-sm items-center"
            style={{
              position: 'relative',
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px'
            } as React.CSSProperties}>
            <div className="flex -space-x-2 mr-3">
              <img alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="/assets/578a5bc5-2c9f-4285-8ae6-0d7daf_33d785f5e92f.webp" />
              <img alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="/assets/1a99aa12-9c50-44fe-bb7d-5dfef2_d7bfbddcb034.webp" />
              <img alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="/assets/2e91b8c7-be64-41b5-8bd8-75efab_c57d7cf9ede8.webp" />
              <div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-900 text-white flex items-center justify-center text-[9px] font-bold tracking-tighter">
                +150
              </div>
            </div>
            <span className="text-xs font-medium text-zinc-600 tracking-wide">
              <span className="text-zinc-900">Resultados Reais</span> para negócios de elite
            </span>
          </div>

          {/* Headline */}
          <h1 className="leading-[0.95] lg:text-[5.5rem] text-5xl font-medium text-zinc-900 tracking-tighter mb-8">
            Transformamos sua<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-200 font-light italic">Operação em Escala</span> Autônoma
          </h1>

          {/* Subheadline */}
          <p className="text-sm text-zinc-500 font-medium max-w-md mb-10 leading-relaxed tracking-wide border-l-2 border-orange-500/50 pl-6">
            Wagner Salla e o time da NexoraLabs constroem ecossistemas digitais que não apenas funcionam, mas lucram. De arquiteturas robustas a Agentes de IA que vendem por você, 24 horas por dia.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:mb-24 mb-16 gap-x-3 gap-y-3">
            <button className="hover:bg-black transition-all flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-xl gap-x-3 gap-y-3 items-center justify-between"
              style={{
                background: 'radial-gradient(circle at 10% 0%, #fed7aa 0%, #fb923c 100%)',
                boxShadow: '0 15px 25px -10px rgba(248, 113, 22, 0.7), inset 0 4px 8px rgba(253, 230, 138, 0.9), inset 0 -4px 8px rgba(249, 115, 22, 0.9)'
              }}>
              <span className="text-sm font-bold tracking-tight text-zinc-900">
                Garantir Diagnóstico Gratuito
              </span>
              <span className="flex items-center justify-center rounded-full bg-black/10 px-3 py-1">
                <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ color: 'rgb(15, 23, 42)' }} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </span>
            </button>
            <button className="hover:bg-zinc-50 hover:text-zinc-900 transition-all flex text-sm font-medium text-zinc-600 bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-x-2 gap-y-2 items-center"
              style={{
                boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                color: '#e5e7eb',
                position: 'relative',
                '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))',
                '--border-radius-before': '9999px'
              } as React.CSSProperties}>
              <span className="text-sm font-medium text-black/60 tracking-tight">
                Explorar Arsenal
              </span>
              <svg fill="none" height="16" stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ color: 'rgb(229, 231, 235)' }} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Footer Stats with Curved Lines */}
          <div className="flex flex-wrap gap-2 md:gap-6 mt-auto gap-x-2 gap-y-2 items-center">
            {/* Stat 1 */}
            <div className="flex items-center group cursor-default">
              <div className="px-1 text-center">
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                  Foco Total</p>
                <p className="text-sm text-zinc-900 font-medium">ROI &amp; Lucratividade</p>
              </div>
              <div className="curve-separator opacity-60 ml-4 md:ml-8"></div>
            </div>
            {/* Stat 2 */}
            <div className="flex items-center group cursor-default">
              <div className="px-1 text-center">
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                  Ecossistema</p>
                <p className="text-sm text-zinc-900 font-medium">Automação de Elite</p>
              </div>
              <div className="curve-separator md:ml-8 opacity-60 ml-4"></div>
            </div>
            {/* Stat 3 */}
            <div className="flex items-center group cursor-default">
              <div className="px-1 text-center">
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                  Parceria</p>
                <p className="text-sm text-zinc-900 font-medium">Open Code</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Card */}
        <div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-0 relative group perspective-1000">
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/20 transition-all duration-700 ease-out border border-white/20">
            {/* Background Asset */}
            <img alt="Sci-fi landscape" className="transition-transform duration-[2s] ease-in-out group-hover:scale-110 filter saturate-[0.8] w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="/assets/96e3ccfa-3799-4c9c-9f2a-263c0f_f43320a4382a.webp" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-zinc-900/10"></div>

            {/* Overlay Content Container */}
            <div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
              {/* Top Row: Status Badges */}
              <div className="flex items-start justify-between">
                <div className="flex gap-2 bg-gradient-to-b from-white/10 to-white/0 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center"
                  style={{
                    position: 'relative',
                    '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                    '--border-radius-before': '9999px'
                  } as React.CSSProperties}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-white tracking-wide">Nexora Intelligence Active</span>
                </div>
                <div className="flex hover:bg-white/20 transition-colors cursor-pointer text-white bg-gradient-to-b from-white/10 to-white/0 w-10 h-10 rounded-full items-center justify-center"
                  style={{
                    position: 'relative',
                    '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                    '--border-radius-before': '9999px'
                  } as React.CSSProperties}>
                  <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </svg>
                </div>
              </div>

              {/* Middle: Floating Widget */}
              <div className="self-end transform group-hover:translate-y-0 transition-transform duration-700 ease-out bg-gradient-to-b from-white/10 to-white/0 w-full max-w-[240px] rounded-xl mt-60 pt-4 pr-4 pb-4 pl-4 backdrop-blur translate-y-4"
                style={{
                  position: 'relative',
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                  '--border-radius-before': '12px'
                } as React.CSSProperties}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px] font-bold">
                      ⚡</div>
                    <span className="text-xs text-white font-medium">Performance IA</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">+40% Eficiência</span>
                </div>
                <div className="h-12 w-full mb-2 flex items-end gap-1">
                  <div className="w-1/5 bg-white/20 rounded-t-sm h-[40%]"></div>
                  <div className="w-1/5 bg-white/20 rounded-t-sm h-[70%]"></div>
                  <div className="w-1/5 bg-white/20 rounded-t-sm h-[50%]"></div>
                  <div className="w-1/5 bg-white/30 rounded-t-sm h-[85%]"></div>
                  <div className="w-1/5 bg-emerald-500 rounded-t-sm h-[95%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-white/60 uppercase">Impacto Projetado</span>
                    <span className="text-sm text-white font-mono font-medium">R$ Escala Ilimitada</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Animated Carousel */}
              <div className="overflow-hidden w-full h-[100px] border-white/10 rounded-xl border-t mt-auto pt-4 relative">
                <div className="animate-vertical-scroll flex flex-col h-[300px]">
                  {/* Item 1 */}
                  <div className="flex flex-col h-[100px] justify-start">
                    <div className="flex gap-3 mb-2 gap-x-3 gap-y-3 items-center">
                      <img alt="Reviewer" className="w-8 h-8 rounded-full object-cover border border-white/20" src="/assets/7b1ee7e8-7554-433d-a435-029da3_9bd09ac29fdb.webp" />
                      <div className="flex flex-col">
                        <span className="text-white text-xs font-semibold tracking-wide">Marcos Oliveira</span>
                        <span className="text-white/50 text-[9px] uppercase tracking-wider">CEO da TechScale</span>
                      </div>
                    </div>
                    <p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2">
                      "A NexoraLabs não entrega apenas código, entrega liberdade. Minha operação hoje roda sozinha com a IA que eles criaram."
                    </p>
                  </div>
                  {/* Item 2 */}
                  <div className="h-[100px] flex flex-col justify-start">
                    <div className="flex items-center gap-3 mb-2">
                      <img alt="Reviewer" className="w-8 h-8 rounded-full object-cover border border-white/20" src="/assets/b3f17582-5cb8-4efd-895a-b59c93_5343306160e6.webp" />
                      <div className="flex flex-col">
                        <span className="text-white text-xs font-semibold tracking-wide">Beatriz Lins</span>
                        <span className="text-white/50 text-[9px] uppercase tracking-wider">Head de Growth</span>
                      </div>
                    </div>
                    <p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2">
                      "O sistema é blindado e a conversão subiu 35% no primeiro mês. O Wagner é um estrategista raro."
                    </p>
                  </div>
                  {/* Item 3 */}
                  <div className="h-[100px] flex flex-col justify-start">
                    <div className="flex items-center gap-3 mb-2">
                      <img alt="Reviewer" className="w-8 h-8 rounded-full object-cover border border-white/20" src="/assets/08cf0e21-ab10-49b1-b896-e0bfbc_49a8ee583926.webp" />
                      <div className="flex flex-col">
                        <span className="text-white text-xs font-semibold tracking-wide">Rodrigo Santos</span>
                        <span className="text-white/50 text-[9px] uppercase tracking-wider">Fundador da Nexa</span>
                      </div>
                    </div>
                    <p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2">
                      "Parceria que gera lucro. Se você quer parar de perder tempo e começar a escalar, a NexoraLabs é o caminho."
                    </p>
                  </div>
                  {/* Duplicate Item 1 to loop seamlessly */}
                  <div className="flex flex-col h-[100px] justify-start">
                    <div className="flex gap-3 mb-2 gap-x-3 gap-y-3 items-center">
                      <img alt="Reviewer" className="w-8 h-8 rounded-full object-cover border border-white/20" src="/assets/7b1ee7e8-7554-433d-a435-029da3_9bd09ac29fdb.webp" />
                      <div className="flex flex-col">
                        <span className="text-white text-xs font-semibold tracking-wide">Marcos Oliveira</span>
                        <span className="text-white/50 text-[9px] uppercase tracking-wider">CEO da TechScale</span>
                      </div>
                    </div>
                    <p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2">
                      "A NexoraLabs não entrega apenas código, entrega liberdade. Minha operação hoje roda sozinha com a IA que eles criaram."
                    </p>
                  </div>
                </div>

                {/* Fade overlay for smooth exit/entry visually */}
                <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-zinc-900/0 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-zinc-900/50 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>
    </>
  );
};
