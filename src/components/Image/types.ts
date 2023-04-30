import { TSize, TColor } from '@/types'
import { HTMLAttributes } from 'react'

export type DescriptionProps = Partial<{
    size: TSize
}>

export type ImageProps = HTMLAttributes<HTMLImageElement> &
  Partial<{
    bg: TColor
    src: string
    alt: string
    withDescription: boolean
  }> & DescriptionProps