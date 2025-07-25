'use client'

import { Computer, Lock, ScanEye, Sparkles, Users } from 'lucide-react'
import { GridItem } from '../glowing-grid-item'

export function MainContent() {
  return (
    <section className="m-auto flex flex-col items-center">
      {/* <CallBanner
        className="max-w-[1026px]"
        title="Ficou com alguma duvida ?"
        description="Entre em contato com nossa equipe."
        buttonLabel="Entrar em contato"
      /> */}

      <main id="about" className="mt-14 max-w-[1026px] p-5 px-8">
        <h3 className="text-base font-semibold text-brand/90">SOBRE NOS</h3>
        <h1 className="text-4xl font-bold text-[#2E4140]">
          Por que Escolher a PrimeDev?
        </h1>
        <p>
          Somos uma startup apaixonada por transformar ideias em soluções
          digitais. Com foco em inovação, qualidade e alta performance, estamos
          aqui para construir o futuro do seu negócio.
        </p>

        <ul className="mt-4 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={
              <Computer className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Missão"
            description="Ajudar empresas e empreendedores a alcançarem seus objetivos por meio de soluções tecnológicas personalizadas, eficientes e inovadoras."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={
              <ScanEye className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Visão"
            description="Ser referência no desenvolvimento de softwares, conquistando a confiança de nossos clientes e contribuindo para o sucesso de seus projetos."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Valores"
            description="Inovação, comprometimento, transparência e excelência. Sempre buscamos as melhores soluções tecnológicas e mantemos comunicação clara com nossos clientes."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={
              <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Diferenciais"
            description="Tecnologia de ponta, atendimento personalizado e foco no resultado. Cada cliente é único e cada projeto é tratado com exclusividade."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={
              <Users className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Nossa Equipe"
            description="Nossa equipe é formada por profissionais criativos e experientes, prontos para transformar desafios em oportunidades."
          />
        </ul>
      </main>
      {/* <CallBanner
        className="max-w-[1026px]"
        title="Quer saber mais sobre como podemos ajudar sua empresa?"
        description="Fale conosco e descubra como transformar suas ideias em realidade."
        buttonLabel="Entrar em contato"
      /> */}
    </section>
  )
}
