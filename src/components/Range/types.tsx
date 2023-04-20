import { TColor } from '@/types'
import { HTMLAttributes } from 'react'

export type WrapperProps = Partial<{
    width: number
    height: number
}>

export type RangeProps = HTMLAttributes<HTMLInputElement> &
  Partial<{
    min: number
    max: number
    color: TColor
    circleSize: number
    circleColor: TColor
    fillColor: TColor
    disabled: boolean
}> & WrapperProps