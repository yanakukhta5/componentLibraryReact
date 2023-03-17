import styled from '@emotion/styled'

import { TSize, TColor } from '@/types'
import { Paragraph } from '../Paragraph'

export const Wrapper = styled(Paragraph)<{ color: TSize | string, size: TSize }>`
  color: ${({ color, theme }) => (theme.colors[color] ? theme.colors[color] : color)};
  font-size: ${({ size, theme }) => typeof size === 'string' ? theme.fontSizes[size] : size + 'px'};
`.withComponent('h2')
