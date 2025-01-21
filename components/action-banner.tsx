import { cn } from "@/lib/utils";
import { MessageSquareText } from "lucide-react";
import { Button } from "./ui/button";

interface CallBannerProps {
  title: string
  description: string
  buttonLabel: string
  className?: string
}

export function CallBanner({ title, buttonLabel, description, className }: CallBannerProps) {
  return (
    <div className={cn("flex w-full md:px-8", className)}>
      <div className="flex w-full flex-col items-center justify-between gap-4 bg-white p-6 md:flex-row md:rounded-md md:border md:border-zinc-200">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <span className="flex aspect-square w-min items-center justify-center rounded-full bg-slate-100 p-4">
            <MessageSquareText className="text-brand sm:w-6 md:w-8 lg:w-14" />
          </span>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-medium text-brand lg:text-3xl">
              {title}
            </h2>
            <p className="text-lg lg:text-2xl">
              {description}
            </p>
          </div>
        </div>
        <Button className="text-xl font-semibold" size="lg">
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}