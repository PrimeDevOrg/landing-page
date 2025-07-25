'use client'
import {
  Controls,
  MediaPlayer,
  MediaProvider,
  PlayButton,
} from '@vidstack/react'
import '@vidstack/react/player/styles/base.css'
import { Pause, Play } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

// Dados dos depoimentos
const testimonials = [
  {
    id: 1,
    title: 'Marcio Carvalho',
    subtitle: 'Grupo Praxis',
    description:
      'A PrimeDev desenvolveu o nosso site do grupo Praxis, que é um grupo acadêmico e colocamos ele no ar. E a negociação desde o início foi muito facilitada, eficiente o atendimento, a entrega também foi rápida, é fácil de negociar com a empresa e as alterações que nós pedimos no site também foram feitas de forma muito ágil...',
    videoSrc: '/testimonials/grupo-praxis.mp4',
  },
  {
    id: 2,
    title: 'Raphael Teixeira',
    subtitle: 'Roda Já',
    description:
      'Boa noite, vim através desse vídeo falar sobre o desenvolvimento do meu aplicativo da PrimeDev, o atendimento, o desempenho nas amostras...reforço mais uma vez, sobre o atendimento, sobre a conversa, diante das dúvidas, as sugestões, não tem o que falar, indico para qualquer um de olhos fechados.',
    videoSrc: '/testimonials/roda-ja.mp4',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="m-auto flex max-w-[1026px] flex-col p-5 px-8"
    >
      <h3 className="text-lg font-normal text-brand">DEPOIMENTOS</h3>
      <h1 className="mb-8 text-4xl font-bold text-[#2E4140]">
        Feedback de pessoas que escolheram a PrimeDev
      </h1>
      <Carousel>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="basis-1/2">
              <div className="mx-2 flex gap-4 rounded-xl border bg-white p-6">
                <div className="video-container w-[180px] flex-shrink-0">
                  <MediaPlayer
                    title={testimonial.title}
                    src={testimonial.videoSrc}
                    aspectRatio="9/16"
                    className="w-full overflow-hidden rounded-lg shadow-md"
                    playsInline
                    preload="metadata"
                  >
                    <MediaProvider />
                    <Controls.Root className="vds-controls">
                      <Controls.Group className="vds-controls-group">
                        <PlayButton className="custom-play-button">
                          <Play className="vds-play-icon" />
                          <Pause className="vds-pause-icon" />
                        </PlayButton>
                      </Controls.Group>
                    </Controls.Root>
                  </MediaPlayer>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-[#2E4140]">
                    {testimonial.title}
                  </h3>
                  <p className="text-sm font-bold text-slate-500">
                    {testimonial.subtitle}
                  </p>
                  <p className="mt-3 text-sm italic leading-relaxed text-slate-600">
                    &ldquo;{testimonial.description}&rdquo;
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
