import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';

const contactSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  mail: z.string().email('Digite um email válido'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleSendMessage = (data: ContactFormData) => {
    console.log('Dados enviados:', data);
    reset();
  };

  return (
    <section
      id="contact"
      className="m-auto my-8 flex max-w-[1026px] flex-col p-5 px-8"
    >
      <h3 className="text-lg uppercase text-brand">CONTATO</h3>
      <h1 className="text-4xl font-bold text-slate-800">
        Entre em contato com nossa equipe e solicite um orçamento
      </h1>
      <div className="m-auto mt-6 flex w-full max-w-[660px] rounded-md border bg-white p-6 shadow-md">
        <form
          onSubmit={handleSubmit(handleSendMessage)}
          className="flex w-full flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-700">
              Nome:{' '}
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="h-12 rounded-md border p-4 italic"
              placeholder="Digite seu nome ou nome da sua empresa"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mail" className="text-slate-700">
              Email:{' '}
            </label>
            <input
              type="email"
              id="mail"
              {...register('mail')}
              className="h-12 rounded-md border p-4 italic"
              placeholder="Digite seu email para contato"
            />
            {errors.mail && (
              <span className="text-red-500">{errors.mail.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-slate-700">
              Mensagem:{' '}
            </label>
            <textarea
              id="message"
              {...register('message')}
              className="h-[153px] resize-none rounded-md border p-4 italic"
              placeholder="Digite sua mensagem"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
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
