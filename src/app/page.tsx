import React from 'react';
import { GridLines } from '@/components/layout/GridLines';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { MasterDefi } from '@/components/sections/MasterDefi';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { MainCta } from '@/components/sections/MainCta';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-zinc-50 min-h-screen rounded-3xl overflow-hidden text-zinc-900 font-sans selection:bg-orange-500/30 selection:text-orange-900">
      <GridLines />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-6 pb-24">
        <Header />
        <main className="flex flex-col items-center justify-center mt-20 lg:mt-32 w-full gap-24 lg:gap-32">
          <Hero />
          <div className="flex flex-col w-full gap-0">
            <MasterDefi />
            <FeatureGrid />
          </div>
          <MainCta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
