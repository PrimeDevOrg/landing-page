'use client';
import { Header } from '../header';
import { Hero } from './hero';

import { Contact } from './contact';
import { MainContent } from './main-content';
import { Services } from './services';
import { Testimonials } from './testimonials';

export function App() {
  return (
    <div className="h-full w-full bg-slate-50">
      <Header />
      <Hero />

      <Services />
      <MainContent />
      <Testimonials />
      <Contact />
    </div>
  );
}
