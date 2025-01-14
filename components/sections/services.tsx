import { services } from '@/data/services'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

export function Services() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-50 bg-slate-50">
        <div className="grid-cols-auto grid max-w-[1026px] justify-center gap-4 p-8">
          {services.map(
            ({ id, icon, title, description, label, subDescription }) => {
              return (
                <Card key={id}>
                  <CardHeader>
                    <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-slate-100">
                      <Image src={icon} alt="website" width={38} />
                    </span>
                    <CardTitle className="text-3xl font-extrabold text-slate-800">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="mb-4 text-lg text-zinc-700">
                      {description}
                    </CardDescription>
                    <span className="mt-4 text-sm uppercase text-brand">
                      {label}
                    </span>
                    <p className="text-zinc-900">{subDescription}</p>
                  </CardContent>
                </Card>
              )
            },
          )}
        </div>
      </div>
    </section>
  )
}
