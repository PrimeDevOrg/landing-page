'use client'
import { Button } from '../ui/button'
import { ContainerTextFlip } from '../ui/container-text-flip'

import FadeContent from '../ui/FadeContent/FadeContent'
import { GridBackground } from '../ui/grid-background'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden border-b border-slate-300 bg-zinc-950"
    >
      <GridBackground />
      <div className="absolute z-40 flex max-w-[1026px] flex-col justify-center gap-3 p-8">
        <h1 className="max-w-[960px] text-center text-4xl font-bold text-zinc-950 md:text-7xl">
          Sua empresa precisa de um software{' '}
          <ContainerTextFlip
            className="bg-slate-700"
            words={['rápido', 'moderno', 'seguro', 'escalável']}
          />
        </h1>

        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-center text-lg font-medium text-zinc-700 md:text-base lg:text-xl">
            Criamos softwares personalizados para transformar ideias em soluções
            digitais.
          </p>
          <a
            href="https://wa.me/+5562982559125?text=Ol%C3%A1%2C+estou+interessado+em+um+dos+servi%C3%A7os+da+PrimeDev%2C+pode+me+falar+mais+sobre+isso%3F"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg">Entrar em contato</Button>
          </a>
        </FadeContent>
      </div>
    </section>
  )
}
