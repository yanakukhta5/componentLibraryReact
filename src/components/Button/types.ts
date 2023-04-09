import { HTMLAttributes } from 'react'
import { TColor } from '@/types'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & Partial<{
  fullwidth: boolean
  disabled: boolean
  color: TColor
  background: TColor
  onClick: () => void
  type: 'reset' | 'button' | 'submit'
}>