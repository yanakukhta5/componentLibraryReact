import { ReactNode } from 'react'

import { BaseProps } from '@/types'
import { TColor, TSize } from '@/types'

export interface TitleProps extends BaseProps {
  children: ReactNode
  size?: TSize
  color: TColor | string
}
