import styled from '@emotion/styled'

import { ButtonProps } from './types'

export const Wrapper = styled.button<ButtonProps>`
  box-sizing: border-box;
  border-radius: 6px;
  border: 0px;
  min-width: 112px;
  width: ${({ fullwidth = false }) => (fullwidth ? '100%' : 'auto')};
  transition: all 0.1s ease-in-out;
  padding: 10px;
  cursor: ${({ disabled = false }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ theme, background = 'primary', disabled = false }) =>
    disabled ? theme.colors[background] + '99' : theme.colors[background]};
  color: ${({ theme, color = 'lightest' }) => theme.colors[color]};

  &:hover {
    transform: ${({ disabled = false }) =>
      disabled ? 'initial' : 'scale(1.05)'};
  }

  &:focus-visible {
    transform: scale(1.05);
    outline: 3px solid
      ${({ theme, color = 'lightest' }) => theme.colors[color]}70;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  }

  &:disabled,
  &:active {
    transform: initial;
    box-shadow: none;
  }
`
