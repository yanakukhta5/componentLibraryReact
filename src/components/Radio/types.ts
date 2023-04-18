import { TColor } from '@/types'
import { HTMLAttributes } from 'react'

export type LabelProps = Partial<{
  disabled: boolean
  checked: boolean
  gap: number
}>

export type RadioProps = LabelProps &
  HTMLAttributes<HTMLInputElement> &
  Partial<{
    disabled: boolean
    checked: boolean
    label: string
    color: TColor
  }>
