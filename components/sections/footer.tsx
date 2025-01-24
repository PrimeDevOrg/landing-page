import Image from 'next/image';
import { BackgroundBeams } from '../ui/background-beams';

export function Footer() {
  return (
    <div className="relative">
      <footer className="relative flex flex-col items-center justify-center gap-9 bg-slate-800 px-8 py-10 text-zinc-100 md:flex-row md:items-start">
        <BackgroundBeams />

        <div className="z-20 flex flex-col gap-2 text-center md:text-left">
          <Image
            src={'/logo-white.png'}
            width={150}
            height={50}
            className="w-[130px]"
            alt="PrimeDev"
          />
          <p>Copyright ©2025 PrimeDev. Designed by PrimeDev</p>
        </div>

        <div className="z-20 mb-3 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Mapa do site</h3>
          <nav className="flex flex-col gap-4">
            <a href="#services">Serviços</a>
            <a href="#about">Sobre nós</a>
            <a href="#">Projetos</a>
            <a href="#">Depoimentos</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>

        <div className="z-20 flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Contato</h3>
          <p>
            Email:{' '}
            <a
              href="mailto:primedev@gmail.com"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              primedev@gmail.com
            </a>
          </p>
          <p>
            Whatsapp:{' '}
            <a
              href="https://wa.me/+5562994826949?text=Ol%C3%A1%2C+estou+interessado+em+um+dos+servi%C3%A7os+da+PrimeDev%2C+pode+me+falar+mais+sobre+isso%3F"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              +55 (62) 99482-6949
            </a>
          </p>
          <p>
            Instagram:{' '}
            <a
              href="https://www.instagram.com/primedev.oficial/"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              @primedev.oficial
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
