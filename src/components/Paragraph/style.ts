import styled from '@emotion/styled'

import { TSize, TColor } from '@/types'

export const Wrapper = styled.p<{size: TSize, color: TColor}>(({ size, color, theme }) => ({
  fontSize: theme.fontSizes[size],
  color: theme.colors[color]
}))
