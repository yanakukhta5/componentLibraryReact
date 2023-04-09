import styled from '@emotion/styled'

import { LoaderProps } from './types'

import { assosiateArrayWithSizes } from '@/utils'

const loaderSizesValues: Array<number> = [20, 30, 40, 50, 60, 70]

export const loaderSizes = assosiateArrayWithSizes(loaderSizesValues)

export const Wrapper = styled.span<LoaderProps>`
  --loader-size: ${({ size = 'md'}) => loaderSizes[size]}px;
  --loader-border-size: 4px;
  --loader-border-color: ${({ theme, color = 'primary' }) => theme.colors[color]};
  display: block;
  width: var(--loader-size);
  height: var(--loader-size);
  border: var(--loader-border-size) solid var(--loader-border-color);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  animation: rotateX 0.7s infinite linear;

  &::before {
    content: '';
    border: var(--loader-border-size) solid var(--loader-border-color);
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    animation: rotateX 0.35s infinite linear reverse;
  }

  @keyframes rotateX {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`
