import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'> & {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        [
          'w-full h-12 px-4 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl border-2 border-transparent transition-all',
          'focus:outline-0 hover:border-border-secondary hover:text-content-body active:border-border-tertiary focus:border-border-tertiary',
        ],
        className
      )}
      {...props}
    />
  )
}
