import { services } from '@/data/services'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'

export function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto min-h-screen max-w-[1026px] p-4 md:p-8"
    >
      <div className="mb-4 flex flex-col">
        <h3 className="text-base font-semibold uppercase text-brand/90">
          Serviços
        </h3>
        <h2 className="text-4xl font-bold text-slate-800">
          O que podemos fazer por você?
        </h2>
      </div>
      <div className="z-50 justify-center bg-white">
        <div className="flex h-full w-full flex-col items-center">
          <div className="grid justify-center gap-4 sm:grid-cols-auto-sm md:grid-cols-auto-md lg:grid-cols-auto">
            {services.map(
              ({ id, icon, title, description, label, subDescription }) => {
                return (
                  <CardContainer key={id} className="h-full">
                    <CardBody className="flex h-full w-full flex-1 flex-col items-start gap-2 rounded-2xl border bg-white p-6">
                      <CardItem
                        className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-slate-100"
                        as="span"
                        translateZ="60"
                      >
                        <Image src={icon} alt="website" width={38} />
                      </CardItem>

                      <CardItem
                        className="text-3xl font-extrabold text-slate-800"
                        as="strong"
                        translateZ="40"
                      >
                        {title}
                      </CardItem>
                      <CardItem
                        as="p"
                        className="mb-4 text-lg text-zinc-700"
                        translateZ="65"
                      >
                        {description}
                      </CardItem>
                      <CardItem
                        as="span"
                        className="mt-4 text-sm uppercase text-brand"
                        translateZ="50"
                      >
                        {label}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="50"
                        className="text-zinc-9000"
                      >
                        {subDescription}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                )
              },
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
