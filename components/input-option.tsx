import { UseFormRegisterReturn } from 'react-hook-form'

interface InputOptionProps {
  register: UseFormRegisterReturn
  value: string
  children: React.ReactNode
}

export function InputOption({ register, value, children }: InputOptionProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-full border px-2 py-1 transition-colors hover:bg-slate-50 has-[:checked]:bg-brand has-[:checked]:text-white">
      <input
        type="radio"
        {...register}
        value={value}
        className="sr-only"
      />
      <span>{children}</span>
    </label>
  )
} 