import { FC } from 'react'

import { Wrapper } from './style'
import { ParagraphProps } from './types'


export const Paragraph: FC<ParagraphProps> = function ({ children, size = 'md', color = 'darkest', ...props }) {
  return <Wrapper {...props} size={size} color={color}>{children}</Wrapper>
}
