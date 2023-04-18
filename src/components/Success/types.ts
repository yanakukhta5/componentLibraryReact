import { TColor } from '@/types'

import { HTMLAttributes } from 'react'

export type StyleSvgProps = Partial<{
  width: number
}>

export type StyleCircleProps = Partial<{
  stroke: TColor
  fill: TColor
  strokeWidth: number
  r: number
  persent: number
  duration: number
}>

export type SuccessProps = HTMLAttributes<HTMLOrSVGElement> &
  StyleSvgProps &
  StyleCircleProps &
  Partial<{
    substrate: TColor
  }>
