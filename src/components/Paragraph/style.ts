import styled from '@emotion/styled'

import { ParagraphProps } from './types'

export const Wrapper = styled.p<ParagraphProps>(
  ({ fontSize = 16, color = 'darkest', theme }) => ({
    fontSize: fontSize + 'px',
    color: theme.colors[color],
    fontFamily: theme.fonts.primary
  })
)
