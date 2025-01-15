import { Send } from "lucide-react";
import { Button } from "../ui/button";

function handleSendMessage(data: any) {
  event?.preventDefault()
  console.log(data);
}

export function Contact() {
  return (
    <section id="contact" className="my-8 py-6 flex flex-col m-auto w-[1026px]">
      <h3 className="text-xl text-brand">CONTATO</h3>
      <h1 className="text-[2.5rem] font-bold text-[#2E4140]">Entre em contato com nossa equipe e solicite um orçamento</h1>
      <div className="w-[620px] h-[510px] p-8 flex m-auto border shadow-md rounded-md mt-4">
        <form onSubmit={handleSendMessage} className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-700">Nome: </label>
            <input type="text" name="name" id="name" className="h-12 border rounded-md p-4 italic" placeholder="Digite seu nome ou nome da sua empresa"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mail" className="text-slate-700">Email: </label>
            <input type="text" name="mail" id="mail" className="h-12 border rounded-md p-4 italic" placeholder="Digite seu email para contato"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-slate-700">Mensagem: </label>
            <textarea
              name="message"
              id="message"
              className="h-[153px] border rounded-md p-4 italic resize-none"
              placeholder="Digite sua mensagem"
            />
          </div>
          <Button className="text-xl h-14 rounded-3xl w-[556px]" type="submit" variant={'default'}>Enviar <Send size={24} /></Button>
        </form>
      </div>
    </section>
  )
}