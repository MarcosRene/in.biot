import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'> & {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        [
          'w-full min-h-12 p-4 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl border-2 border-transparent transition-all',
          'focus:outline-0 hover:border-border-secondary hover:text-content-body active:border-border-tertiary focus:border-border-tertiary',
        ],
        className
      )}
      {...props}
    />
  )
}
