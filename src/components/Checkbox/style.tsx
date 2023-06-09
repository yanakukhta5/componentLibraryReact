import styled from '@emotion/styled'

import { LabelProps, CheckboxProps } from './types'

import { Input } from '../Input'
import { Label } from '../Label'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Box = styled(Input)<CheckboxProps>`
  width: unset;
  position: absolute;
  z-index: -1;
  border: none;
  height: unset;
  outline: none;
  opacity: 0;
  &:checked + label::before {
    border-color: ${({theme, color = "primary"}) => theme.colors[color]};
    background-color: ${({theme, color = "primary"}) => theme.colors[color]};
    background-image: url("/img/svg/checkMark.svg");
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: ${({theme, color = "primary"}) => theme.colors[color]};
  }
  &:disabled + label::before {
    background-color: #e9ecef;
  }
`

export const CheckboxLabel = styled(Label)<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  opacity: ${({ disabled = false }) => (disabled ? '0.6' : '1')};
  align-items: baseline;
  display: flex;
  cursor: ${({disabled}) => disabled ? "unset" : "pointer"};
  &::before {
    content: '';
    position: relative;
    top: 3px;
    box-sizing: border-box;
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 3px;
    margin-right: ${({ gap = 7 }) => gap}px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
`
