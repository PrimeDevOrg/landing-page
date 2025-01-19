'use client';

import { Check } from 'lucide-react';
import { CallBanner } from '../action-banner';
import { AboutCard } from '../ui/AboutCard';

export function MainContent() {
  return (
    <section className="m-auto flex flex-col items-center bg-slate-50">
      <CallBanner
        className="max-w-[1026px]"
        title="Ficou com alguma duvida ?"
        description="Entre em contato com nossa equipe."
        buttonLabel="Entrar em contato"
      />

      <main id="about" className="mt-14 max-w-[1026px] p-5 px-8">
        <h3 className="text-lg text-brand">SOBRE NOS</h3>
        <h1 className="text-4xl font-bold text-[#2E4140]">
          Por que Escolher a PrimeDev?
        </h1>
        <p>
          Somos uma startup apaixonada por transformar ideias em soluções
          digitais. Com foco em inovação, qualidade e alta performance, estamos
          aqui para construir o futuro do seu negócio.
        </p>

        <div id="cards" className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <AboutCard className="col-span-1">
            <h3>Missão:</h3>
            <p className="text-base font-normal text-zinc-800">
              Ajudar empresas e empreendedores a alcançarem seus objetivos por
              meio de soluções tecnológicas personalizadas, eficientes e
              inovadoras.
            </p>
          </AboutCard>
          <AboutCard className="col-span-1">
            <h3>Visão:</h3>
            <p className="text-base font-normal text-zinc-800">
              Ser referência no desenvolvimento de softwares, conquistando a
              confiança de nossos clientes e contribuindo para o sucesso de seus
              projetos.
            </p>
          </AboutCard>
          <AboutCard className="col-span-1">
            <h3>Valores:</h3>
            <p className="text-base font-normal text-zinc-800">
              <ul className="pb-[0.63rem]">
                <li className="flex gap-2">
                  <Check size={16} className="w-5 text-brand" /> Inovação:
                  Sempre buscar as melhores soluções tecnológicas.
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="w-5 text-brand" />
                  Comprometimento: Entregar qualidade e superar expectativas.
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="w-6 text-brand" />
                  Transparência: Manter uma comunicação clara e aberta com
                  nossos clientes.
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="w-5 text-brand" />
                  Excelência: Buscar constantemente a perfeição em cada detalhe.
                </li>
              </ul>
            </p>
          </AboutCard>
          <AboutCard className="col-span-1">
            <h3>Destaque de Diferenciais:</h3>
            <p className="text-base font-normal text-zinc-800">
              <ul className="pb-[0.63rem]">
                <li className="flex gap-2">
                  <Check size={16} className="w-5 text-brand" /> Tecnologia de
                  Ponta: Trabalhamos com as melhores ferramentas e práticas do
                  mercado.
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="w-5 text-brand" />
                  Atendimento Personalizado: Cada cliente é único, e cada
                  projeto é tratado com exclusividade.
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="w-6 text-brand" />
                  Foco no Resultado: Nosso objetivo é criar soluções que
                  realmente façam a diferença.
                </li>
              </ul>
            </p>
          </AboutCard>
          <AboutCard className="md:col-span-2">
            <h3>Nossa Equipe:</h3>
            <p className="text-base font-normal text-zinc-800">
              Nossa equipe é formada por profissionais criativos e experientes,
              prontos para transformar desafios em oportunidades.
            </p>
          </AboutCard>
        </div>
      </main>
      <CallBanner
        className="max-w-[1026px]"
        title="Quer saber mais sobre como podemos ajudar sua empresa?"
        description="Fale conosco e descubra como transformar suas ideias em realidade."
        buttonLabel="Entrar em contato"
      />
    </section>
  );
}
