import { TSize, TColor } from '@/types'
import { HTMLAttributes } from 'react'

export type ImageProps = HTMLAttributes<HTMLImageElement> &
  Partial<{
    bg: TColor
    src: string
    alt: string
    size: TSize
    withDescription: boolean
  }>
