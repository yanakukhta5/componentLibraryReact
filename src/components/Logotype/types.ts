import { TSize } from '@/types'
import { HTMLAttributes } from 'react'

export type LogotypeProps = HTMLAttributes<HTMLDivElement> & {
  size: TSize | number
  withText: boolean
}
