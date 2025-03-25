import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const buttonVariants = cva(
  'h-12 px-4 rounded-xl font-semibold transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-0 focus:ring-2 focus:ring-offset-2 focus:ring-accent-purple',
  {
    variants: {
      variant: {
        default:
          'text-white bg-accent-purple shadow-lg shadow-accent-purple/50',
        secondary: 'bg-background-tertiary hover:text-white',
        ghost:
          'hover:bg-accent-purple hover:shadow-lg hover:shadow-accent-purple/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    variant?: 'default' | 'secondary' | 'ghost'
  }

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}
