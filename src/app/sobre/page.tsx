import React from 'react';
import Image from 'next/image';
import { GridLines } from '@/components/layout/GridLines';
import { Header } from '@/components/layout/Header';
import { MainCta } from '@/components/sections/MainCta';
import { Footer } from '@/components/layout/Footer';

export default function Sobre() {
  return (
    <div className="bg-zinc-50 min-h-screen rounded-3xl overflow-hidden text-zinc-900 font-sans selection:bg-orange-500/30 selection:text-orange-900">
      <GridLines />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-6 pb-24">
        <Header />
        <main className="flex flex-col items-center justify-center mt-12 lg:mt-16 w-full gap-24 lg:gap-32">

          {/* Dark Hero */}
          <section className="w-full bg-zinc-900 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url(/assets/a5387a0b-52c6-40c2-b3be-ef8632_5ea829d0de5b.webp)] bg-cover bg-center opacity-20 saturate-0 mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-zinc-900/80 via-transparent to-zinc-800/40 pointer-events-none" />

            <div className="z-10 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-sm font-medium mb-8 border border-white/5 shadow-sm backdrop-blur-md">
                Quem sou eu
              </div>
              <h1 className="md:text-6xl lg:text-7xl text-4xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Engenharia de Elite <br /> <span className="text-zinc-400 italic font-light">&amp; Visão de Negócio</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mx-auto">
                Na NexoraLabs, Wagner Salla projeta máquinas de crescimento autônomo, unindo software de alta performance com IA para escalar operações sem atrito.
              </p>
            </div>
          </section>

          {/* Bio Section */}
          <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Photo / Visual */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-zinc-200 border border-zinc-200 shadow-lg overflow-hidden relative">
                <Image
                  src="/assets/ceo.jpeg"
                  alt="Wagner Salla"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-24 bg-gradient-to-t from-white via-white/95 to-transparent">
                  <p className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-1">Founder &amp; Growth Architect</p>
                  <p className="text-2xl font-semibold text-zinc-900 tracking-tight">Wagner Salla</p>
                  <p className="text-sm text-zinc-500 mt-1">Vitória-ES, Brasil</p>
                </div>
                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm border border-zinc-100 rounded-2xl px-4 py-3 shadow-md">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Experiência</p>
                  <p className="text-xl font-semibold text-zinc-900 tracking-tight">+10 anos</p>
                </div>
              </div>
            </div>

            {/* Right: Bio Text */}
            <div className="flex flex-col gap-8 py-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-500 font-medium mb-4">Minha Jornada</p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-900 mb-6">
                  Do código à estratégia, cada projeto é uma oportunidade de inovar.
                </h2>
                <div className="space-y-4 text-zinc-600 text-base leading-relaxed">
                  <p>
                    Minha carreira é guiada por uma obsessão: eficiência. Comecei no desenvolvimento de software de alta performance, mas percebi que o código sozinho era apenas metade da solução. O verdadeiro salto de escala acontece quando sistemas robustos são integrados a uma camada estratégica de Inteligência Artificial.
                  </p>
                  <p>
                    Como fundador da NexoraLabs, meu papel é projetar arquiteturas digitais que não apenas funcionam, mas aceleram o lucro. Desenvolvo Agentes de IA que operam 24/7, qualificando leads e fechando vendas, enquanto as infraestruturas web que construo garantem que sua operação suporte o crescimento global sem falhas.
                  </p>
                  <p>
                    Acredito em parcerias de alto nível, onde sou o seu braço direito tecnológico. Se você busca parar de apagar incêndios operacionais e quer começar a escalar com automação inteligente, você encontrou o parceiro certo.
                  </p>
                </div>
              </div>

              {/* Values / Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                    <svg className="text-orange-500" height="20" viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="m13 2l-1.5 6.5L18 7l-8 15l1.5-6.5L5 17z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 tracking-tight mb-1">Performance Extrema</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">Cada milissegundo conta. Otimizo até o último byte.</p>
                </div>
                <div className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-3">
                    <svg className="text-violet-500" height="20" viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 tracking-tight mb-1">Visão Global</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">Soluções que escalam para qualquer mercado.</p>
                </div>
                <div className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
                    <svg className="text-emerald-500" height="20" viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 tracking-tight mb-1">Segurança First</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">Código seguro desde a primeira linha.</p>
                </div>
                <div className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-3">
                    <svg className="text-sky-500" height="20" viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 tracking-tight mb-1">Parceria Real</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">Trabalho lado a lado com cada cliente.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline / Milestones */}
          <section className="w-full">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-3">Trajetória</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-900">Marcos da Carreira</h2>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2" />

              <div className="space-y-12">
                {/* Milestone 1 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <p className="text-xs uppercase tracking-widest text-orange-500 font-medium mb-1">2019</p>
                    <h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Fundação Técnica</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">Início da jornada focado em lógica de programação pura e na construção de interfaces que priorizam a experiência do usuário e conversão.</p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-orange-500 rounded-full -translate-x-1/2 mt-1 md:mt-0 ring-4 ring-zinc-50" />
                  <div className="md:w-1/2 md:pl-12" />
                </div>

                {/* Milestone 2 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                  <div className="md:w-1/2 md:text-right md:pr-12 md:order-1 order-1" />
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-violet-500 rounded-full -translate-x-1/2 mt-1 md:mt-0 ring-4 ring-zinc-50" />
                  <div className="md:w-1/2 md:pl-12 md:order-2 order-2">
                    <p className="text-xs uppercase tracking-widest text-violet-500 font-medium mb-1">2021</p>
                    <h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Escalabilidade Enterprise</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">Especialização em arquiteturas Next.js e Node.js para sistemas de alta carga, garantindo infraestruturas inabaláveis para operações em escala.</p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <p className="text-xs uppercase tracking-widest text-emerald-500 font-medium mb-1">2023</p>
                    <h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Arquitetura de Inteligência</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">Pivô estratégico para IA Generativa. Desenvolvimento de Agentes autônomos que transformam o custo operacional em ROI direto através de automação.</p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-emerald-500 rounded-full -translate-x-1/2 mt-1 md:mt-0 ring-4 ring-zinc-50" />
                  <div className="md:w-1/2 md:pl-12" />
                </div>

                {/* Milestone 4 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                  <div className="md:w-1/2 md:text-right md:pr-12 md:order-1 order-1" />
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-sky-500 rounded-full -translate-x-1/2 mt-1 md:mt-0 ring-4 ring-zinc-50" />
                  <div className="md:w-1/2 md:pl-12 md:order-2 order-2">
                    <p className="text-xs uppercase tracking-widest text-sky-500 font-medium mb-1">2025</p>
                    <h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">NexoraLabs: Growth Intelligence</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">Fundação da NexoraLabs como consultoria de elite, unificando engenharia e IA para escalar negócios que buscam dominância no mercado digital.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <MainCta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
