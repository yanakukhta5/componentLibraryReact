import { FC } from 'react'

import { Wrapper } from './style'
import { ParagraphProps } from './types'

export const Paragraph: FC<ParagraphProps> = function ({
  children,
  fontSize = 16,
  color = 'darkest',
  ...props
}) {
  return (
    <Wrapper {...props} fontSize={fontSize} color={color}>
      {children}
    </Wrapper>
  )
}
