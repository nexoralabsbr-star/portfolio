import React from 'react';
import { GridLines } from '@/components/layout/GridLines';
import { Header } from '@/components/layout/Header';
import { MasterDefi } from '@/components/sections/MasterDefi';
import { MainCta } from '@/components/sections/MainCta';
import { Footer } from '@/components/layout/Footer';

export default function Servicos() {
  return (
    <div className="bg-zinc-50 min-h-screen rounded-3xl overflow-hidden text-zinc-900 font-sans selection:bg-orange-500/30 selection:text-orange-900">
      <GridLines />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-6 pb-24">
        <Header />
        <main className="flex flex-col items-center justify-center mt-12 lg:mt-16 w-full gap-24 lg:gap-32">
          
          {/* Dark Hero for Subpage */}
          <section className="w-full bg-zinc-900 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
            {/* Decorative BG element */}
            <div className="absolute inset-0 bg-[url(/assets/a5387a0b-52c6-40c2-b3be-ef8632_5ea829d0de5b.webp)] bg-cover bg-center opacity-20 saturate-0 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-zinc-800/50 to-transparent pointer-events-none" />
            
            <div className="z-10 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-sm font-medium mb-8 border border-white/5 shadow-sm backdrop-blur-md">
                  Aceleração de Negócios
              </div>
              <h1 className="md:text-6xl lg:text-7xl text-4xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                  Engenharia de Elite para <span className="text-zinc-400 italic font-light">Escala de Elite</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mx-auto">
                  Sistemas web inabaláveis e Agentes de IA que operam 24/7. Descubra como transformamos gargalos tecnológicos em motores de lucro ininterruptos.
              </p>
            </div>
          </section>

          <MasterDefi />
          
          <MainCta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
