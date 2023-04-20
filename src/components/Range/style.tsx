import styled from '@emotion/styled'

import { Input } from '../Input'

import { assosiateArrayWithSizes } from '@/utils'

import { RangeProps, WrapperProps } from './types'

export const Component = styled(Input)<RangeProps>`
  appearance: none;
  background: ${({ theme, color = 'serface' }) => theme.colors[color]};
  border-radius: 50px;
  outline: none;
  padding: 0;
  overflow: hidden;
  height: 100%;
  margin: 0;
  opacity: ${({ disabled = false }) => (disabled ? '0.5' : '1')};
  width: 100%;
  &::-webkit-slider-thumb {
    --circleSize: ${({ circleSize = 15 }) => circleSize}px;
    appearance: none;
    position: relative;
    background-color: ${({ theme, circleColor = 'primary' }) =>
    theme.colors[circleColor]};
    width: var(--circleSize);
    height: var(--circleSize);
    box-shadow: -810px 0 0 800px ${({ theme, fillColor = 'secondary' }) => theme.colors[fillColor]};
    border-radius: 50%;
    border: 0;
    cursor: ${({ disabled = false }) => (disabled ? 'unset' : 'pointer')};
  }
`

export const Wrapper = styled.div<WrapperProps>`
  overflow: hidden;
  height: ${({ height = 15 }) => height}px;
  width: ${({width = 300}) => width}px;
  display: flex;
`