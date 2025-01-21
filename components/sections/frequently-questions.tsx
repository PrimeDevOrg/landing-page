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
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ask-2">
              <AccordionTrigger>
                Vocês desenvolvem aplicativos para Android e iOS?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ask-3">
              <AccordionTrigger>
                Como funcionam as APIs desenvolvidas pela PrimeDev?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ask-4">
              <AccordionTrigger>
                A PrimeDev oferece suporte após a entrega do projeto?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ask-5">
              <AccordionTrigger>
                Quanto tempo leva para concluir um projeto?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
