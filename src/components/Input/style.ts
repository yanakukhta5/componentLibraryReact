import styled from '@emotion/styled'

import { InputProps } from './types'

export const Component = styled.input<InputProps>`
  box-sizing: border-box;
  width: ${({width}) => width ? width + 'px' : '100%'};
  border-radius: 6px;
  border: 1px solid ${({ theme, borderColor = "peripheral" }) => theme.colors[borderColor]};
  height: 100%;
  outline: none;
  padding: 5px 10px;
  font-size: 16px;
`
