import { TSize, TColor } from '@/types'

export interface ImageProps {
  bg: TColor
  src: string
  alt: string
  size: TSize | number
  withDescription: boolean
}
