import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <div>
      <footer className="flex flex-col items-center justify-center gap-9 bg-slate-800 px-8 py-10 text-zinc-100 md:flex-row md:items-start">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-2xl font-semibold">PrimeDev</h3>
          <p>Copyright ©2025 PrimeDev. Designed by PrimeDev</p>
        </div>

        <div className="mb-3 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Mapa do site</h3>
          <nav className="flex flex-col gap-4">
            <a href="#services">Serviços</a>
            <a href="#about">Sobre nós</a>
            <a href="#">Projetos</a>
            <a href="#">Depoimentos</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>

        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Contato</h3>
          <p>
            Email:{' '}
            <a href="mailto:primedev@gmail.com" className="underline">
              primedev@gmail.com
            </a>
          </p>
          <p>
            Whatsapp:{' '}
            <a href="tel:+5598876543" className="underline">
              +55 9887-6543
            </a>
          </p>
          <a
            href="#"
            aria-label="Instagram da PrimeDev"
            className="flex justify-center md:justify-start"
          >
            <Instagram size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
