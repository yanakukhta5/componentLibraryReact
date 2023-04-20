import { TColor } from '@/types'
import { HTMLAttributes } from 'react'

export type LabelProps = Partial<{
  checked: boolean
  gap: number
  disabled: boolean
}>

export type CheckboxProps = LabelProps &
  HTMLAttributes<HTMLInputElement> &
  Partial<{
    disabled: boolean
    checked: boolean
    label: string
    color: TColor
  }>
