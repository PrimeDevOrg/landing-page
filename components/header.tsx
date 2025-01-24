import { Menu } from 'lucide-react';
import Image from 'next/image';
import Logo from '../app/assets/logo.svg';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Header() {
  return (
    <div className="fixed left-1/2 z-[1000] w-full max-w-[1026px] -translate-x-1/2 md:top-4 lg:top-6">
      <header className="hidden w-full items-center justify-between gap-4 rounded-full border bg-white px-5 py-4 shadow lg:flex">
        <Image src={Logo} alt="PrimeDev" width={140} />

        <nav className="flex gap-4 text-slate-700">
          <a href="#services">Serviços</a>
          <a href="#about">Sobre nos</a>
          <a href="#testimonials">Depoimentos</a>
          <a href="#faq">FAQ</a>
          {/* <a href="#contact">Contato</a> */}
        </nav>

        <a
          href="https://wa.me/+5562994826949?text=Ol%C3%A1%2C+estou+interessado+em+um+dos+servi%C3%A7os+da+PrimeDev%2C+pode+me+falar+mais+sobre+isso%3F"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Solicitar orçamento</Button>
        </a>
      </header>

      <header className="flex w-full items-center justify-between p-4 lg:hidden">
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Menu className="text-zinc-700" />
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="#services">Serviços</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#about">Sobre nos</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#testimonials">Depoimentos</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#faq">FAQ</a>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>Contato</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center justify-center rounded-full border border-zinc-200 bg-white px-2 py-1">
            <Image src={Logo} alt="PrimeDev" className="w-[100px]" />
          </div>
        </div>

        <a
          href="https://wa.me/+5562994826949?text=Ol%C3%A1%2C+estou+interessado+em+um+dos+servi%C3%A7os+da+PrimeDev%2C+pode+me+falar+mais+sobre+isso%3F"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Solicitar orçamento</Button>
        </a>
      </header>
    </div>
  );
}
