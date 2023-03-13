import styled from '@emotion/styled'

import { TSize } from '@/types'

export const sizes: Record<TSize, number> = {
  sm: 20,
  md: 40,
  lg: 60,
  x: 80,
  xs: 100
}

export const Wrapper = styled.div<{ size: TSize | number }>`
  display: flex;
  width: fit-content;
  height: ${({ size }) => (typeof size === 'number' ? size : sizes[size])}px;
  margin: 0;
`

export const LogotypeTitle = styled.h1<{
  withText: boolean
  size: TSize | number
}>(({ size, withText, theme }) => ({
  display: withText ? 'block' : 'none',
  fontSize: typeof size === 'number' ? size : sizes[size] / 2 + 'px',
  margin: 0,
  marginLeft: typeof size === 'number' ? size : sizes[size as TSize] / 6 + 'px',
  color: theme.colors.darkest
}))

export const LogotypeSubitle = styled.h2<{
  withText: boolean
  size: TSize | number
}>(({ size, withText, theme }) => ({
  display: withText ? 'block' : 'none',
  fontSize: typeof size === 'number' ? size : sizes[size] / 3 + 'px',
  margin: 0,
  marginLeft: typeof size === 'number' ? size : sizes[size] / 6 + 'px',
  color: theme.colors.peripheral
}))

export const LogotypeImage = styled.img`
  width: 100%;
  object-fit: contain;
`
