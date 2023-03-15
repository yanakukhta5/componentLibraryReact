import { FC } from 'react'

import { Wrapper } from './style'
import { TColor, TSize } from '@/types'
import { ParagraphProps } from './types'

export const defaultProps: ParagraphProps = {
 size: 'md',
 color: 'darkest',
 children: ""
}

export const Paragraph: FC<ParagraphProps> = function ({ children, size, color }) {
  return <Wrapper size={size as TSize} color={color as TColor}>{children}</Wrapper>
}

Paragraph.defaultProps ={
  ...defaultProps
}
