import { HTMLAttributes, ReactNode } from 'react'

import { TColor } from '@/types'

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  Partial<{
    children: ReactNode
    fontSize: number
    color: TColor
  }>
