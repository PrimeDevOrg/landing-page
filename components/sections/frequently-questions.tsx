import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Card, CardContent } from '../ui/card';

export function FrequentlyQuestions() {
  return (
    <section
      id="faq"
      className="mx-auto my-5 flex max-w-[1026px] flex-col gap-6 p-5 px-8"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-brand">FAQ</h3>
        <h2 className="text-4xl font-bold text-slate-800">
          Perguntas frequentes
        </h2>
      </div>

      <Card>
        <CardContent className="pt-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="ask-1">
              <AccordionTrigger>
                Quais tipos de websites a PrimeDev desenvolve?
              </AccordionTrigger>
              <AccordionContent>
                Na PrimeDev, desenvolvemos diversos tipos de websites para
                atender às necessidades específicas de cada cliente. Nossos
                serviços incluem: Sites Institucionais: Fortalecem a presença
                online da sua empresa, apresentando informações essenciais de
                forma profissional e atrativa. Lojas Virtuais (E-commerce):
                Impulsionam suas vendas online com plataformas seguras, fáceis
                de navegar e otimizadas para conversão. Portais de Conteúdo:
                Engajam e informam seu público-alvo, oferecendo uma experiência
                de usuário impecável e design responsivo. Todos os nossos
                projetos são modernos, otimizados para SEO e adaptáveis a
                diferentes dispositivos, garantindo máxima visibilidade e
                desempenho superior. Além disso, oferecemos soluções
                personalizadas para diversos setores, alinhando tecnologia de
                ponta às necessidades do seu negócio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ask-2">
              <AccordionTrigger>
                Vocês desenvolvem aplicativos para Android e iOS?
              </AccordionTrigger>
              <AccordionContent>
                Sim, na PrimeDev, desenvolvemos aplicativos móveis de alta
                performance compatíveis com Android e iOS. Nossos apps possuem
                interfaces intuitivas e funcionalidades robustas, visando
                encantar os usuários e impulsionar os negócios de nossos
                clientes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ask-3">
              <AccordionTrigger>
                Como funcionam as APIs desenvolvidas pela PrimeDev?
              </AccordionTrigger>
              <AccordionContent>
                Na PrimeDev, desenvolvemos APIs (Interfaces de Programação de
                Aplicações) que permitem a comunicação eficiente entre
                diferentes sistemas e plataformas. Nossas APIs são projetadas
                para serem seguras, escaláveis e de fácil integração, garantindo
                que seus aplicativos possam interagir perfeitamente com outros
                serviços e dados. Utilizamos as melhores práticas de
                desenvolvimento, como o uso de métodos HTTP adequados (GET,
                POST, PUT, DELETE) e formatos de dados como JSON e XML, para
                assegurar a eficiência e a compatibilidade das integrações.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ask-4">
              <AccordionTrigger>
                A PrimeDev oferece suporte após a entrega do projeto?
              </AccordionTrigger>
              <AccordionContent>
                Sim, na PrimeDev, oferecemos suporte contínuo após a entrega do
                projeto, garantindo que suas soluções digitais permaneçam
                atualizadas, seguras e com desempenho máximo. Fornecemos
                manutenção preventiva e suporte técnico especializado para
                atender às suas necessidades.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ask-5">
              <AccordionTrigger>
                Quanto tempo leva para concluir um projeto?
              </AccordionTrigger>
              <AccordionContent>
                O tempo necessário para concluir um projeto na PrimeDev varia
                conforme a complexidade e o escopo do trabalho. Projetos mais
                simples podem ser finalizados em algumas semanas, enquanto
                projetos mais complexos podem demandar alguns meses. Para
                fornecer uma estimativa mais precisa, é importante avaliar as
                necessidades específicas do seu projeto. Recomendamos entrar em
                contato conosco para discutirmos os detalhes e estabelecermos um
                cronograma adequado às suas expectativas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
