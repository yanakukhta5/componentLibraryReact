import { FC } from 'react'

import { Wrapper } from './style'
import { ParagraphProps } from './types'

export const defaultProps: ParagraphProps = {
 size: 'md',
 color: 'darkest',
 children: ""
}

export const Paragraph: FC<ParagraphProps> = function ({ children, size, color }) {
  return <Wrapper size={size} color={color}>{children}</Wrapper>
}

Paragraph.defaultProps ={
  ...defaultProps
}
