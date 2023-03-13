import styled from '@emotion/styled'
import { TSize } from '@/shared/types'
import { EColor } from '@/shared/tokens/colors'

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
  height: ${({ size }) => typeof size === 'number' ? size : sizes[size]}px;
  margin: 0;
`

export const LogotypeTitle = styled.h1<{ withText: boolean, size: TSize | number }>`
  display: ${({ withText }) => withText ? 'block' : 'none'};
  font-size: ${({ size }) => typeof size === 'number' ? size : sizes[size] / 2}px;
  margin: 0 0 0 ${({ size }) => typeof size === 'number' ? size : sizes[size] / 6}px;
  color: ${EColor.darkest}
`

export const LogotypeSubitle = styled.h2<{ withText: boolean, size: TSize | number }>`
  display: ${({ withText }) => withText ? 'block' : 'none'};
  font-size: ${({ size }) => typeof size === 'number' ? size : sizes[size] / 3}px;
  margin: 0 0 0 ${({ size }) => typeof size === 'number' ? size : sizes[size] / 6}px;
  color: ${EColor.peripheral};
`

export const LogotypeImage = styled.img`
  width: 100%;
  object-fit: contain;
`
