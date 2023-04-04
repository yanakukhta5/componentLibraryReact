import styled from '@emotion/styled'

import { ProgressProps, WrapperProgressProps } from './types'

export const Wrapper = styled.div<WrapperProgressProps>`
  position: relative;
  height: ${({ height = 20 }) => height + 20}px;
  &::after {
    display: block;
    position: absolute;
    left: 0;
    top: ${({ afterTop = 20 }) => afterTop}px;
    color: ${({theme, afterColor = "primary"}) => theme.colors[afterColor]};
    content: '${({description = ''}) => description}';
  }
`

export const Component = styled.progress<ProgressProps>`
  --border-radius: ${({radius = 10}) => radius}px;
  width: ${({ fullwidth = false }) => (fullwidth ? '100%' : 'revert')};
  height: ${({ height = 20 }) => height}px;
  overflow: hidden;
  &[value] {
    -webkit-appearance: none;
    appearance: none;
    &::-webkit-progress-bar {
      background-color: #eee;
      border-radius: var(--border-radius);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
    &::-webkit-progress-value {
      border-radius: var(--border-radius);
      background-color: ${({theme, background = "primary"}) => theme.colors[background]};
    }
  }
`

export const ProgressOverflow = styled.div`
  ${Component} {
    
  }
`