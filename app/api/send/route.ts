import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  mail: z.string().email('Digite um email válido'),
  whatsapp: z.string().min(10, 'Digite um WhatsApp válido com DDD'),
  empresa: z.string().optional(),
  cargo: z.string().optional(),
  tamanhoEmpresa: z.string().optional(),
  servico: z.string().min(1, 'Selecione o serviço que você precisa'),
  investimento: z.string().min(1, 'Selecione o valor que pretende investir'),
  prazo: z.string().min(1, 'Selecione o prazo desejado'),
  detalhes: z
    .string()
    .min(10, 'Os detalhes do projeto devem ter pelo menos 10 caracteres'),
})

export async function POST(request: Request) {
  const data = await request.json()

  const {
    name,
    mail,
    whatsapp,
    empresa,
    cargo,
    tamanhoEmpresa,
    servico,
    investimento,
    prazo,
    detalhes,
  } = contactSchema.parse(data)

  try {
    const { data, error } = await resend.emails.send({
      from: 'PrimeDev <contato@primedev.dev>',
      to: ['primedev.dev@gmail.com'],
      subject: 'Novo Lead - PrimeDev',
      react: EmailTemplate({
        name,
        mail,
        whatsapp,
        empresa,
        cargo,
        tamanhoEmpresa,
        servico,
        investimento,
        prazo,
        detalhes,
      }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
