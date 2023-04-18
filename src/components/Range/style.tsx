import styled from '@emotion/styled'

import { Input } from '../Input'

import { RangeProps } from './types'

export const Component = styled(Input)<RangeProps>`
  height: ${({ height = 4 }) => height}px;
  width: ${({ width = 300 }) => width}px;
  appearance: none;
  background: ${({ theme, color = 'serface' }) => theme.colors[color]};
  border-radius: 50px;
  outline: none;
  padding: 0;
  overflow: hidden;
  &::-webkit-slider-thumb {
    --circleSize: ${({ circleSize = 22 }) => circleSize}px;
    appearance: none;
    position: relative;
    background-color: ${({ theme, circleColor = 'primary' }) =>
    theme.colors[circleColor]};
    width: var(--circleSize);
    height: var(--circleSize);
    box-shadow: -200px 0 0 185px ${({ theme, fillColor = 'secondary' }) => theme.colors[fillColor]};
    border-radius: 50%;
    border: 0;
    cursor: ${({ active = true }) => (active ? 'pointer' : 'unset')};
  }
`
