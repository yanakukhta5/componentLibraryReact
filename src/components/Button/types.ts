import { BaseProps, TColor } from '@/types'

export type ButtonProps = Partial<{
  fullwidth: boolean
  disabled: boolean
  color: TColor
  background: TColor
}> &
  BaseProps
