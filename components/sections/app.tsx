'use client'
import { Header } from '../header'
import { Hero } from './hero'

import whatsappIcon from '@/public/whatsapp-icon.svg'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Contact } from './contact'
import { Footer } from './footer'
import { FrequentlyQuestions } from './frequently-questions'
import { MainContent } from './main-content'
import { Services } from './services'
import { Testimonials } from './testimonials'

export function App() {
  return (
    <div className="h-full w-full bg-white">
      <Header />
      <Hero />

      <Services />
      <MainContent />
      <Testimonials />
      <FrequentlyQuestions />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/+5562982559125?text=Ol%C3%A1%2C+estou+interessado+em+um+dos+servi%C3%A7os+da+PrimeDev%2C+pode+me+falar+mais+sobre+isso%3F"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          size="icon"
          className="fixed bottom-6 right-6 aspect-square h-[66px] w-[66px] bg-green-500 hover:bg-green-600"
        >
          <Image src={whatsappIcon} alt="Whatsapp" width={40} height={40} />
        </Button>
      </a>
    </div>
  )
}
