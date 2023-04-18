import styled from '@emotion/styled'

import { ProgressProps, WrapperProgressProps } from './types'

export const Wrapper = styled.div<WrapperProgressProps>`
  position: relative;
  height: ${({ height = 20 }) => height}px;
  flex-direction: column;
  align-items: stretch;
  &::after {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 14px;
    display: block;
    position: absolute;
    left: 0;
    top: ${({ afterTop = 20 }) => afterTop}px;
    color: ${({ theme, afterColor = 'additional' }) =>
      theme.colors[afterColor]};
    content: '${({ description = '' }) => description}';
  }
  div {
    height: 100%;
  }
`

export const ProgressOverflow = styled.div<ProgressProps>`
  --border-radius: ${({ radius = 10 }) => radius}px;
  overflow: hidden;
  border-radius: var(--border-radius);
  display: flex;
  progress {
    width: ${({ fullwidth = false }) => (fullwidth ? '100%' : 'revert')};
    height: 100%;
  }
`

export const Component = styled.progress<ProgressProps>`
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
      background-color: ${({ theme, background = 'primary' }) =>
        theme.colors[background]};
    }
  }
`
