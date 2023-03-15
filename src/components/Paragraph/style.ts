import styled from '@emotion/styled'

import { TSize, TColor } from '@/types'

export const Wrapper = styled.p<{ size: TSize; color: TColor }>(
  ({ size, color, theme }) => ({
    fontSize: typeof size === 'string' ? theme.fontSizes[size] : size,
    color: theme.colors[color]
  })
)
