import { Send } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '../ui/button';

export function Contact() {
  // Referências para os campos do formulário
  const nameRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Função de envio
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o comportamento padrão (recarregar a página)

    // Acessa os valores diretamente pelos refs
    const name = nameRef.current?.value;
    const mail = mailRef.current?.value;
    const message = messageRef.current?.value;

    // Lógica de envio aqui (ex: enviar para uma API)
    console.log('Dados enviados:', { name, mail, message });

    // Limpa os campos após envio
    if (nameRef.current) nameRef.current.value = '';
    if (mailRef.current) mailRef.current.value = '';
    if (messageRef.current) messageRef.current.value = '';
  };

  return (
    <section
      id="contact"
      className="m-auto my-8 flex max-w-[1026px] flex-col p-5 px-8"
    >
      <h3 className="text-lg text-brand">CONTATO</h3>
      <h1 className="text-4xl font-bold text-slate-800">
        Entre em contato com nossa equipe e solicite um orçamento
      </h1>
      <div className="m-auto mt-6 flex w-full max-w-[660px] rounded-md border bg-white p-6 shadow-md">
        <form
          onSubmit={handleSendMessage}
          className="flex w-full flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-700">
              Nome:{' '}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              ref={nameRef}
              className="h-12 rounded-md border p-4 italic"
              placeholder="Digite seu nome ou nome da sua empresa"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mail" className="text-slate-700">
              Email:{' '}
            </label>
            <input
              type="email"
              name="mail"
              id="mail"
              ref={mailRef}
              className="h-12 rounded-md border p-4 italic"
              placeholder="Digite seu email para contato"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-slate-700">
              Mensagem:{' '}
            </label>
            <textarea
              name="message"
              id="message"
              ref={messageRef}
              className="h-[153px] resize-none rounded-md border p-4 italic"
              placeholder="Digite sua mensagem"
            />
          </div>
          <Button
            className="h-14 w-full rounded-3xl text-xl"
            type="submit"
            variant="default"
          >
            Enviar <Send size={24} />
          </Button>
        </form>
      </div>
    </section>
  );
}
