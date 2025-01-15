import { useRef } from "react";
import { Send } from "lucide-react";
import { Button } from "../ui/button";

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
    console.log("Dados enviados:", { name, mail, message });

    // Limpa os campos após envio
    if (nameRef.current) nameRef.current.value = "";
    if (mailRef.current) mailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <section id="contact" className="my-8 py-6 flex flex-col m-auto w-[1026px]">
      <h3 className="text-xl text-brand">CONTATO</h3>
      <h1 className="text-[2.5rem] font-bold text-[#2E4140]">
        Entre em contato com nossa equipe e solicite um orçamento
      </h1>
      <div className="w-[620px] h-[510px] p-8 flex m-auto border shadow-md rounded-md mt-4">
        <form onSubmit={handleSendMessage} className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-700">Nome: </label>
            <input
              type="text"
              name="name"
              id="name"
              ref={nameRef}
              className="h-12 border rounded-md p-4 italic"
              placeholder="Digite seu nome ou nome da sua empresa"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mail" className="text-slate-700">Email: </label>
            <input
              type="email"
              name="mail"
              id="mail"
              ref={mailRef}
              className="h-12 border rounded-md p-4 italic"
              placeholder="Digite seu email para contato"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-slate-700">Mensagem: </label>
            <textarea
              name="message"
              id="message"
              ref={messageRef}
              className="h-[153px] border rounded-md p-4 italic resize-none"
              placeholder="Digite sua mensagem"
            />
          </div>
          <Button className="text-xl h-14 rounded-3xl w-[556px]" type="submit" variant="default">
            Enviar <Send size={24} />
          </Button>
        </form>
      </div>
    </section>
  );
}
