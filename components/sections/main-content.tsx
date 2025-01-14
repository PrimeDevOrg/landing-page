"use client";

import { Check, MessageSquareText } from "lucide-react";
import { Button } from "../ui/button";
import { AboutCard } from "../ui/AboutCard";

export function MainContent() {
  return (
    <section className="my-8 flex m-auto" id="main-content">
      <div className="m-auto flex flex-col items-center">
        <div className="flex border border-zinc-300 w-[820px] gap-4 p-6 items-center justify-center rounded-md shadow-sm">
          <span className="w-[5.75rem] p-4 bg-slate-100 justify-center flex rounded-full">
            <MessageSquareText className="text-brand " size={60} />
          </span>
          <div>
            <h2 className="text-3xl text-brand font-medium">Ficou com alguma duvida ?</h2>
            <p className="text-2xl">Entre em contato com nossa equipe.</p>
          </div>
          <Button className="w-[214px] h-[56px] font-semibold text-xl" variant={"default"}>Entrar em contato</Button>
        </div>

        <main id="about" className="w-[1026px] mt-14">
          <h3 className="text-xl text-brand">SOBRE NOS</h3>
          <h1 className="text-[2.5rem] font-bold text-[#2E4140]">Por que Escolher a PrimeDev?</h1>
          <p>Somos uma startup apaixonada por transformar ideias em soluções digitais. Com foco em inovação, qualidade e alta performance, estamos aqui para construir o futuro do seu negócio.</p>

          <div id="cards" className="grid grid-cols-2 mt-4 gap-4">
            <AboutCard className="col-span-1">
              <h3>Missão:</h3>
              <p className="text-base font-normal text-zinc-800">Ajudar empresas e empreendedores a alcançarem seus objetivos por meio de soluções tecnológicas personalizadas, eficientes e inovadoras.</p>
            </AboutCard>
            <AboutCard className="col-span-1">
              <h3>Visão:</h3>
              <p className="text-base font-normal text-zinc-800">Ser referência no desenvolvimento de softwares, conquistando a confiança de nossos clientes e contribuindo para o sucesso de seus projetos.</p>
            </AboutCard>
            <AboutCard className="col-span-1">
              <h3>Valores:</h3>
              <p className="text-base font-normal text-zinc-800">
                <ul className="pb-[0.63rem]">
                  <li className="flex gap-2"><Check size={16} className="text-brand w-5" /> Inovação: Sempre buscar as melhores soluções tecnológicas.</li>
                  <li className="flex gap-2"><Check size={16} className="text-brand w-5" />Comprometimento: Entregar qualidade e superar expectativas.</li>
                  <li className="flex gap-2 "><Check size={16} className="text-brand w-6" />Transparência: Manter uma comunicação clara e aberta com nossos clientes.</li>
                  <li className="flex gap-2"><Check size={16} className="text-brand w-5" />Excelência: Buscar constantemente a perfeição em cada detalhe.</li>
                </ul>
              </p>
            </AboutCard>
            <AboutCard className="col-span-1">
              <h3>Destaque de Diferenciais:</h3>
              <p className="text-base font-normal text-zinc-800">
                <ul className="pb-[0.63rem]">
                  <li className="flex gap-2"><Check size={16} className="text-brand w-5" /> Tecnologia de Ponta: Trabalhamos com as melhores ferramentas e práticas do mercado.</li>
                  <li className="flex gap-2"><Check size={16} className="text-brand w-5" />Atendimento Personalizado: Cada cliente é único, e cada projeto é tratado com exclusividade.</li>
                  <li className="flex gap-2 "><Check size={16} className="text-brand w-6" />Foco no Resultado: Nosso objetivo é criar soluções que realmente façam a diferença.</li>
                </ul>
              </p>
            </AboutCard>
            <AboutCard className="col-span-2">
              <h3>Nossa Equipe:</h3>
              <p className="text-base font-normal text-zinc-800">Nossa equipe é formada por profissionais criativos e experientes, prontos para transformar desafios em oportunidades.</p>
            </AboutCard>
          </div>

          <div className="flex border mt-4 border-zinc-300  gap-4 p-6 items-center justify-center rounded-md shadow-sm">
          <span className="w-[5.75rem] p-4 bg-slate-100 justify-center flex rounded-full">
            <MessageSquareText className="text-brand " size={60} />
          </span>
          <div>
            <h2 className="text-2xl text-brand font-medium">Quer saber mais sobre como podemos ajudar sua empresa?</h2>
            <p className="text-xl text-zinc-700"> Fale conosco e descubra como transformar suas ideias em realidade.</p>
          </div>
          <Button className="w-[214px] h-[56px] font-semibold text-xl" variant={"default"}>Entrar em contato</Button>
        </div>

        </main>
      </div>
    </section>
  );
}
