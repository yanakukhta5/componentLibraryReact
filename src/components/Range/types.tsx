import { TColor } from '@/types'
import { HTMLAttributes } from 'react'

export type RangeProps = HTMLAttributes<HTMLInputElement> &
  Partial<{
    value: number
    min: number
    max: number
    width: number
    height: number
    color: TColor
    circleSize: number
    circleColor: TColor
    active: boolean
    fillColor: TColor
  }>
