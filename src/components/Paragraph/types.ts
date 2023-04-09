import { HTMLAttributes, ReactNode } from 'react'

import { TSize, TColor } from '@/types'

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & Partial<{
  children: ReactNode
  size: TSize
  color: TColor
}>