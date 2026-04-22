import React from 'react';
import { GridLines } from '@/components/layout/GridLines';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Contato() {
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
                Contato
              </div>
              <h1 className="md:text-6xl lg:text-7xl text-4xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Vamos construir o <br/> <span className="text-zinc-400 italic font-light">&amp; Seu Próximo Nível</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mx-auto">
                Pronto para escalar sua operação com IA e engenharia de software de alta performance? Fale direto com a engenharia da NexoraLabs.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left: Info & Direct Links */}
            <div className="flex flex-col gap-8 py-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-500 font-medium mb-4">Conexão Direta</p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-900 mb-6">
                  Menos reuniões inúteis. Mais execução.
                </h2>
                <div className="space-y-4 text-zinc-600 text-base leading-relaxed">
                  <p>
                    Valorizamos o seu tempo tanto quanto o nosso. Ao entrar em contato, você falará diretamente com arquitetos de software e especialistas em IA, não com um time comercial júnior.
                  </p>
                  <p>
                    Seja para tirar do papel uma plataforma complexa, otimizar sua operação atual ou implementar agentes autônomos, estamos prontos para diagnosticar seu desafio.
                  </p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 gap-4 mt-4">
                {/* WhatsApp */}
                <a href="https://wa.me/seunumeroaqui" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <svg className="text-orange-500" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 tracking-tight mb-1">WhatsApp</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">Resposta mais rápida. Fale conosco agora.</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:contato@nexoralabs.com" className="group flex items-center gap-5 bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
                    <svg className="text-zinc-600" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 tracking-tight mb-1">E-mail Corporativo</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">contato@nexoralabs.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a href="#" className="group flex items-center gap-5 bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg className="text-blue-500" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 tracking-tight mb-1">LinkedIn</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">Conecte-se com Wagner Salla e a NexoraLabs.</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Contact Form (or placeholder for logic) */}
            <div className="bg-white border border-zinc-200 shadow-xl rounded-[2rem] p-8 md:p-10 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>
               <h3 className="text-2xl font-semibold tracking-tighter text-zinc-900 mb-2">Envie uma mensagem</h3>
               <p className="text-sm text-zinc-500 mb-8 font-medium">Descreva brevemente o seu desafio. Nós retornaremos em menos de 24h.</p>
               
               <form className="flex flex-col gap-5">
                 <div className="flex flex-col gap-1.5">
                   <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Nome</label>
                   <input type="text" id="name" placeholder="Seu nome ou empresa" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" />
                 </div>
                 
                 <div className="flex flex-col gap-1.5">
                   <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">E-mail</label>
                   <input type="email" id="email" placeholder="seu@email.com" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" />
                 </div>

                 <div className="flex flex-col gap-1.5">
                   <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Mensagem</label>
                   <textarea id="message" rows={4} placeholder="Como podemos ajudar a escalar o seu negócio?" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"></textarea>
                 </div>

                 <button type="button" className="mt-4 w-full bg-zinc-900 hover:bg-black text-white font-semibold rounded-xl py-4 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                   <span>Enviar Solicitação</span>
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                   </svg>
                 </button>
               </form>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}
