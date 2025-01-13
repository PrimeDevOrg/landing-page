import { Crown } from 'lucide-react'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="fixed left-1/2 top-6 z-50 flex w-full max-w-[1026px] -translate-x-1/2 items-center justify-between gap-6 rounded-full border bg-white px-5 py-4 shadow">
      <span className="flex items-center gap-2 text-xl font-bold">
        <Crown className="text-brand" />
        PrimeDev
      </span>

      <nav className="flex gap-4 text-slate-700">
        <a href="#services">Serviços</a>
        <a href="#about">Sobre nos</a>
        <a href="#testimonials">Depoimentos</a>
        <a href="#contact">Contato</a>
      </nav>

      <Button>Solicitar orçamento</Button>
    </header>
  )
}
