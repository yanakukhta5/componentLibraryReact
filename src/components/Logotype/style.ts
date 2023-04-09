import styled from '@emotion/styled'

import { TSize } from '@/types'
import { assosiateArrayWithSizes } from '@/utils'

const sizes = [20, 30, 40, 60, 80, 100]

const logoSizes = assosiateArrayWithSizes(sizes)

export const Wrapper = styled.div<{ size: TSize | number }>`
  display: flex;
  width: fit-content;
  height: ${({ size = 'lg' }) =>
    typeof size === 'number' ? size : logoSizes[size]}px;
  margin: 0;
`

export const LogotypeTitle = styled.h1<{
  withText: boolean
  size: TSize | number
}>(({ size = 'lg', withText = false, theme }) => ({
  display: withText ? 'block' : 'none',
  fontSize: typeof size === 'number' ? size : logoSizes[size] / 2 + 'px',
  margin: 0,
  marginLeft: typeof size === 'number' ? size : logoSizes[size] / 6 + 'px',
  color: theme.colors.darkest
}))

export const LogotypeSubitle = styled.h2<{
  withText: boolean
  size: TSize | number
}>(({ size = 'lg', withText = false, theme }) => ({
  display: withText ? 'block' : 'none',
  fontSize: typeof size === 'number' ? size : logoSizes[size] / 3 + 'px',
  margin: 0,
  marginLeft: typeof size === 'number' ? size : logoSizes[size] / 6 + 'px',
  color: theme.colors.peripheral
}))

export const LogotypeImage = styled.img`
  width: 100%;
  object-fit: contain;
`
