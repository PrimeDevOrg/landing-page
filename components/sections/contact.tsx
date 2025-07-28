'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Send, XCircle } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { InputOption } from '../input-option'
import { Button } from '../ui/button'

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

type ContactFormData = z.infer<typeof contactSchema>

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      servico: 'desenvolvimento-web',
      investimento: 'ate-5k',
      prazo: 'urgente',
      tamanhoEmpresa: 'microempresa',
    },
  })

  const handleSendMessage = async (data: ContactFormData) => {
    setSubmitStatus('sending')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()

        // Volta ao estado normal após 3 segundos
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      } else {
        throw new Error('Erro no envio')
      }
    } catch (error) {
      setSubmitStatus('error')

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }
  }

  return (
    <section
      id="contact"
      className="m-auto my-8 flex max-w-[1026px] flex-col p-5 px-8"
    >
      <h3 className="text-lg text-brand">CONTATO</h3>
      <h1 className="text-4xl font-bold text-slate-800">
        Entre em contato com nossa equipe e solicite um orçamento
      </h1>
      <div className="m-auto mt-6 flex w-full rounded-lg border bg-white p-6">
        <form
          onSubmit={handleSubmit(handleSendMessage)}
          className="flex w-full flex-col gap-4"
        >
          <div className="flex grid-cols-1 flex-col gap-4 md:grid md:flex-none md:grid-cols-2">
            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-slate-700">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="h-12 rounded-md border p-4"
                placeholder="Digite seu nome"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mail" className="text-slate-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="mail"
                {...register('mail')}
                className="h-12 rounded-md border p-4"
                placeholder="Digite seu email para contato"
              />
              {errors.mail && (
                <span className="text-red-500">{errors.mail.message}</span>
              )}
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-2">
              <label htmlFor="whatsapp" className="text-slate-700">
                WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="whatsapp"
                {...register('whatsapp')}
                className="h-12 rounded-md border p-4"
                placeholder="(11) 99999-9999"
              />
              {errors.whatsapp && (
                <span className="text-red-500">{errors.whatsapp.message}</span>
              )}
            </div>

            {/* Empresa */}
            <div className="flex flex-col gap-2">
              <label htmlFor="empresa" className="text-slate-700">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                {...register('empresa')}
                className="h-12 rounded-md border p-4"
                placeholder="Nome da sua empresa"
              />
              {errors.empresa && (
                <span className="text-red-500">{errors.empresa.message}</span>
              )}
            </div>

            {/* Cargo */}
            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="cargo" className="text-slate-700">
                Cargo na empresa
              </label>
              <input
                type="text"
                id="cargo"
                {...register('cargo')}
                className="h-12 rounded-md border p-4"
                placeholder="Seu cargo na empresa"
              />
              {errors.cargo && (
                <span className="text-red-500">{errors.cargo.message}</span>
              )}
            </div>

            {/* Tamanho da empresa */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-slate-700">
                Qual é o tamanho da empresa?
              </label>
              <div className="flex flex-wrap gap-2">
                <InputOption
                  register={register('tamanhoEmpresa')}
                  value="microempresa"
                >
                  Microempresa (até 9 funcionários)
                </InputOption>
                <InputOption
                  register={register('tamanhoEmpresa')}
                  value="pequena"
                >
                  Pequena empresa (10-49 funcionários)
                </InputOption>
                <InputOption
                  register={register('tamanhoEmpresa')}
                  value="media"
                >
                  Média empresa (50-249 funcionários)
                </InputOption>
                <InputOption
                  register={register('tamanhoEmpresa')}
                  value="grande"
                >
                  Grande empresa (250+ funcionários)
                </InputOption>
              </div>
              {errors.tamanhoEmpresa && (
                <span className="text-red-500">
                  {errors.tamanhoEmpresa.message}
                </span>
              )}
            </div>
          </div>

          {/* Serviço */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-700">
              Qual serviço você precisa? <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              <InputOption
                register={register('servico')}
                value="desenvolvimento-web"
              >
                Desenvolvimento Web
              </InputOption>
              <InputOption
                register={register('servico')}
                value="aplicativo-mobile"
              >
                Aplicativo Mobile
              </InputOption>
              <InputOption register={register('servico')} value="ecommerce">
                E-commerce
              </InputOption>
              <InputOption
                register={register('servico')}
                value="sistema-personalizado"
              >
                Sistema Personalizado
              </InputOption>
              <InputOption register={register('servico')} value="consultoria">
                Consultoria em Tecnologia
              </InputOption>
              <InputOption register={register('servico')} value="manutencao">
                Manutenção de Sistema
              </InputOption>
              <InputOption register={register('servico')} value="outros">
                Outros
              </InputOption>
            </div>
            {errors.servico && (
              <span className="text-red-500">{errors.servico.message}</span>
            )}
          </div>

          {/* Investimento */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-700">
              Qual valor você pretende investir nesse projeto?{' '}
              <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              <InputOption register={register('investimento')} value="ate-5k">
                Até R$ 5.000
              </InputOption>
              <InputOption register={register('investimento')} value="5k-15k">
                R$ 5.000 - R$ 15.000
              </InputOption>
              <InputOption register={register('investimento')} value="15k-30k">
                R$ 15.000 - R$ 30.000
              </InputOption>
              <InputOption register={register('investimento')} value="30k-50k">
                R$ 30.000 - R$ 50.000
              </InputOption>
              <InputOption
                register={register('investimento')}
                value="acima-50k"
              >
                Acima de R$ 50.000
              </InputOption>
            </div>
            {errors.investimento && (
              <span className="text-red-500">
                {errors.investimento.message}
              </span>
            )}
          </div>

          {/* Prazo */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-700">
              Em qual prazo você quer seu projeto pronto?{' '}
              <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              <InputOption register={register('prazo')} value="urgente">
                Urgente (até 1 mês)
              </InputOption>
              <InputOption register={register('prazo')} value="1-3-meses">
                1 a 3 meses
              </InputOption>
              <InputOption register={register('prazo')} value="3-6-meses">
                3 a 6 meses
              </InputOption>
              <InputOption register={register('prazo')} value="6-12-meses">
                6 a 12 meses
              </InputOption>
              <InputOption register={register('prazo')} value="acima-12-meses">
                Mais de 12 meses
              </InputOption>
            </div>
            {errors.prazo && (
              <span className="text-red-500">{errors.prazo.message}</span>
            )}
          </div>

          {/* Detalhes do projeto */}
          <div className="flex flex-col gap-2">
            <label htmlFor="detalhes" className="text-slate-700">
              Detalhes do projeto <span className="text-red-500">*</span>
            </label>
            <textarea
              id="detalhes"
              {...register('detalhes')}
              className="h-[153px] resize-none rounded-md border p-4"
              placeholder="Descreva em detalhes o que você precisa, suas expectativas e qualquer informação relevante sobre o projeto"
            />
            {errors.detalhes && (
              <span className="text-red-500">{errors.detalhes.message}</span>
            )}
          </div>

          <Button
            className={`w-full rounded-full py-6 text-xl transition-all duration-300 ${
              submitStatus === 'success'
                ? 'bg-green-600 hover:bg-green-700'
                : submitStatus === 'error'
                  ? 'bg-red-600 hover:bg-red-700'
                  : ''
            }`}
            type="submit"
            variant="default"
            disabled={submitStatus === 'sending'}
          >
            {submitStatus === 'sending' && (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Enviando...
              </>
            )}
            {submitStatus === 'success' && (
              <>
                Enviado com sucesso! <CheckCircle size={24} />
              </>
            )}
            {submitStatus === 'error' && (
              <>
                Erro no envio <XCircle size={24} />
              </>
            )}
            {submitStatus === 'idle' && (
              <>
                Enviar proposta <Send size={24} />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
