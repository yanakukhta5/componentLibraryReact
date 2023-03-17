import { TColor, TSize } from '@/types'
import { FC } from 'react'

import { Wrapper } from './style'
import { TitleProps } from './types'

export const defaultProps: TitleProps = {
 color: 'darkest',
 size: 'md',
 children: ''
}

export const Title: FC<TitleProps> = function ({children, color, size}) {
  return <Wrapper color={color as TColor} size={size as TSize}>
   {children}
  </Wrapper>
}

Title.defaultProps = defaultProps