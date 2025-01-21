export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="m-auto flex max-w-[1026px] flex-col bg-slate-50 p-5 px-8"
    >
      <h3 className="text-lg font-normal text-brand">DEPOIMENTOS</h3>
      <h1 className="text-4xl font-bold text-[#2E4140]">
        Feedback de pessoas que escolheram a PrimeDev
      </h1>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="relative rounded-sm border bg-white p-6 shadow-md">
          <svg
            className="top-21 absolute right-6"
            width="169.98"
            height="113"
            viewBox="0 0 170 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.265 -9.15527e-05L77.265 61.6912C77.265 73.6834 74.5688 83.422 69.1763 90.907C63.7839 98.4726 56.4196 104.026 47.0834 107.567C37.7472 111.189 27.2037 113 15.453 113V77.2649C20.1211 77.0235 23.8636 75.615 26.6806 73.0395C29.417 70.5445 30.7853 66.802 30.7853 61.8119L0 61.8119V-9.15527e-05H77.265ZM169.983 -9.15527e-05V61.6912C169.983 73.6834 167.287 83.422 161.894 90.907C156.502 98.4726 149.138 104.026 139.801 107.567C130.465 111.189 119.922 113 108.171 113V77.2649C112.839 77.0235 116.582 75.615 119.399 73.0395C122.135 70.5445 123.503 66.802 123.503 61.8119H92.718L92.718 -9.15527e-05L169.983 -9.15527e-05Z"
              fill="#64748B"
              fillOpacity="0.2"
            />
          </svg>
          <h3 className="text-xl font-bold">Ana Silva</h3>
          <span>Gerente de Marketing, Loja Virtual Conecta</span>
          <p className="pt-2 font-medium italic">
            "Escolher a PrimeDev para desenvolver nosso site foi uma das
            melhores decisões que tomamos. Eles entenderam exatamente nossas
            necessidades e entregaram um site moderno, rápido e fácil de usar.
            Desde o design até a implementação, tudo foi feito com muito cuidado
            e profissionalismo. Recebemos feedbacks incríveis dos nossos
            clientes, e nossa presença online nunca esteve tão forte!"
          </p>
        </div>
        <div className="relative rounded-sm border bg-white p-6 shadow-md">
          <svg
            className="top-21 absolute right-6"
            width="169.98"
            height="113"
            viewBox="0 0 170 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.265 -9.15527e-05L77.265 61.6912C77.265 73.6834 74.5688 83.422 69.1763 90.907C63.7839 98.4726 56.4196 104.026 47.0834 107.567C37.7472 111.189 27.2037 113 15.453 113V77.2649C20.1211 77.0235 23.8636 75.615 26.6806 73.0395C29.417 70.5445 30.7853 66.802 30.7853 61.8119L0 61.8119V-9.15527e-05H77.265ZM169.983 -9.15527e-05V61.6912C169.983 73.6834 167.287 83.422 161.894 90.907C156.502 98.4726 149.138 104.026 139.801 107.567C130.465 111.189 119.922 113 108.171 113V77.2649C112.839 77.0235 116.582 75.615 119.399 73.0395C122.135 70.5445 123.503 66.802 123.503 61.8119H92.718L92.718 -9.15527e-05L169.983 -9.15527e-05Z"
              fill="#64748B"
              fillOpacity="0.2"
            />
          </svg>
          <h3 className="text-xl font-bold">Carlos Mendes</h3>
          <span>CEO, FitApp</span>
          <p className="pt-2 font-medium italic">
            "O aplicativo desenvolvido pela PrimeDev superou todas as nossas
            expectativas. Eles criaram uma solução intuitiva e funcional que
            melhorou significativamente a experiência dos nossos usuários. A
            equipe foi extremamente atenciosa e entregou o projeto dentro do
            prazo, sempre mantendo uma comunicação clara. Agora, nossos clientes
            podem acessar nossos serviços de forma prática, e nosso negócio
            cresceu como nunca!"
          </p>
        </div>
      </div>
    </section>
  );
}
