'use client'
import { Button } from '../ui/button'

export function Hero() {
  return (
    <section
      id="home"
      className="flex h-screen flex-col items-center justify-center border-b border-slate-300 bg-white p-8"
    >
      <div className="flex max-w-[1026px] flex-col items-center justify-center gap-3">
        <h1 className="max-w-[960px] text-center text-6xl font-extrabold text-slate-900">
          Criamos Soluções Digitais que{' '}
          <span className="text-brand">Transformam Negócios</span>
        </h1>
        <p className="text-center text-4xl font-medium">
          Na PrimeDev, desenvolvemos websites, apps móveis e APIs com{' '}
          <span className="text-nowrap rounded bg-brand px-3 text-white">
            qualidade excepcional
          </span>{' '}
          e desempenho incomparável. Transforme suas ideias em realidade com{' '}
          <strong className="text-brand">tecnologia de ponta.</strong>
        </p>
        <Button size="lg">Entrar em contato</Button>
      </div>
    </section>
  )
}
