import React from 'react';

export const FeatureGrid = () => {
  return (
    <div className="flex flex-col gap-16 z-10 w-full relative gap-x-16 gap-y-16">
      {/* Top Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Feature 1 */}
        <div className="group bg-white border border-zinc-100 rounded-3xl p-6 sm:p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col gap-4">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] relative group">
            <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="/assets/src001.jpeg"
              alt="Engenharia de Performance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="text-zinc-900 mt-2">
            <svg aria-hidden="true" height="28" role="img" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" fill="currentColor" opacity=".5"></path>
              <path d="M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1" fill="currentColor"></path>
            </svg>
          </div>
          <p className="leading-snug text-sm font-normal text-zinc-600">
            <strong className="text-zinc-900">Engenharia de Performance:</strong> Desenvolvimento Fullstack otimizado para transformar milissegundos em vantagem competitiva e autoridade no Google.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="group bg-white border border-zinc-100 rounded-3xl p-6 sm:p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col gap-4">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] relative group">
            <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="/assets/infra_inabalavel.jpeg"
              alt="Infraestrutura Inabalável"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="text-zinc-900 mt-2">
            <svg aria-hidden="true" height="28" role="img" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
              <path d="M12 7.75a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8.5a.75.75 0 0 1 .75-.75" fill="currentColor"></path>
            </svg>
          </div>
          <p className="leading-snug text-sm font-normal text-zinc-600">
            <strong className="text-zinc-900">Infraestrutura Inabalável:</strong> Arquitetura Cloud nativa projetada para suportar picos massivos de tráfego sem degradação de experiência ou perda de dados.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="group bg-white border border-zinc-100 rounded-3xl p-6 sm:p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col gap-4">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] relative group">
            <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="/assets/sistemas_autonomos.jpeg"
              alt="Sistemas Autônomos"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="text-zinc-900 mt-2">
            <svg aria-hidden="true" height="28" role="img" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" fill="currentColor" opacity=".5"></path>
              <path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l4.47-4.47a.75.75 0 0 1 1.06 0" fill="currentColor"></path>
            </svg>
          </div>
          <p className="leading-snug text-sm font-normal text-zinc-600">
            <strong className="text-zinc-900">Sistemas Autônomos:</strong> Implementação de Agentes de IA que qualificam leads e operam processos complexos de forma independente, 24 horas por dia.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="group bg-white border border-zinc-100 rounded-3xl p-6 sm:p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col gap-4">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] relative group">
            <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="/assets/arq_conversao.jpeg"
              alt="Arquitetura de Conversão"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="text-zinc-900 mt-2">
            <svg aria-hidden="true" height="28" role="img" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.83 8.7L12 2.1a.08.08 0 0 0-.07 0L4.17 8.7A1 1 0 0 0 4 9.6V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.6a1 1 0 0 0-.17-.9" fill="currentColor" opacity=".5"></path>
              <path d="M12.75 18a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 1.5 0z" fill="currentColor"></path>
            </svg>
          </div>
          <p className="leading-snug text-sm font-normal text-zinc-600">
            <strong className="text-zinc-900">Arquitetura de Conversão:</strong> Design intencional focado em psicologia do consumidor para elevar o ticket médio e encurtar ciclos de vendas.
          </p>
        </div>
      </div>
    </div>
  );
};
