import React from 'react';
import { GridLines } from '@/components/layout/GridLines';
import { Header } from '@/components/layout/Header';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { MainCta } from '@/components/sections/MainCta';
import { Footer } from '@/components/layout/Footer';

export default function Especialidades() {
  return (
    <div className="bg-zinc-50 min-h-screen rounded-3xl overflow-hidden text-zinc-900 font-sans selection:bg-orange-500/30 selection:text-orange-900">
      <GridLines />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-6 pb-24">
        <Header />
        <main className="flex flex-col items-center justify-center mt-12 lg:mt-16 w-full gap-24 lg:gap-32">

          {/* Dark Hero for Subpage */}
          <section className="w-full bg-zinc-900 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url(/assets/a5387a0b-52c6-40c2-b3be-ef8632_5ea829d0de5b.webp)] bg-cover bg-center opacity-20 saturate-0 mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 to-transparent pointer-events-none" />

            <div className="z-10 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-sm font-medium mb-8 border border-white/5 shadow-sm backdrop-blur-md">
                Diferencial Técnico
              </div>
              <h1 className="md:text-6xl lg:text-7xl text-4xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Ecossistemas de <span className="text-zinc-400 italic font-light">Escala Infinita</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mx-auto">
                Arquitetura robusta, performance de ponta e inteligência artificial aplicada. Conheça as tecnologias e metodologias que sustentam cada projeto.
              </p>
            </div>
          </section>

          {/* Expertise Cards */}
          <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-white border border-zinc-100 rounded-3xl p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center mb-6">
                <svg className="text-orange-500" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 tracking-tight mb-3">Engenharia de Alta Disponibilidade</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                React, Next.js e TypeScript — uma fundação robusta focada em segurança, SEO de elite e escalabilidade horizontal. Sistemas projetados para durar.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-zinc-100 rounded-3xl p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-50 flex items-center justify-center mb-6">
                <svg className="text-violet-500" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
                  <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
                  <path d="M8.56 13a9.4 9.4 0 0 0-.56 3c0 2.76 1.79 5 4 5s4-2.24 4-5a9.4 9.4 0 0 0-.56-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 tracking-tight mb-3">Motores de Crescimento IA</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Automação cognitiva para canais de aquisição. Agentes com memória contextual e integração profunda com CRMs para fechar negócios enquanto você dorme.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-zinc-100 rounded-3xl p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mb-6">
                <svg className="text-emerald-500" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 tracking-tight mb-3">Autoridade & Conversão</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Otimização técnica para dominar o topo das buscas. Estratégias de CRO baseadas em dados para garantir que cada clique se torne uma oportunidade real.
              </p>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="w-full">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-3">Arsenal Tecnológico</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-900">Tecnologias de Ponta</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'React / Next.js', desc: 'Frontend & SSR' },
                { name: 'Node.js', desc: 'Backend & APIs' },
                { name: 'TypeScript', desc: 'Type Safety' },
                { name: 'Python', desc: 'IA & Automação' },
                { name: 'PostgreSQL', desc: 'Banco Relacional' },
                { name: 'Docker', desc: 'Containerização' },
                { name: 'Vercel / AWS', desc: 'Deploy & Infra' },
                { name: 'OpenAI / LangChain', desc: 'LLMs & Agentes' },
              ].map((tech) => (
                <div key={tech.name} className="bg-white border border-zinc-100 rounded-2xl p-5 text-center hover:border-zinc-200 transition-colors shadow-sm">
                  <p className="text-sm font-semibold text-zinc-900 tracking-tight">{tech.name}</p>
                  <p className="text-xs text-zinc-400 mt-1">{tech.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <FeatureGrid />

          <MainCta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
