import styled from '@emotion/styled'

import { LabelProps, RadioProps } from './types'

import { Input } from '../Input'
import { Label } from '../Label'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Circle = styled(Input)<RadioProps>`
  width: unset;
  position: absolute;
  height: unset;
  z-index: -1;
  opacity: 0;
  &:checked + label::before {
    border-color: ${({theme, color = "primary"}) => theme.colors[color]};
    background-color: ${({theme, color = "primary"}) => theme.colors[color]};
    background-image: url("/img/svg/circle.svg");
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: ${({theme, color = "primary"}) => theme.colors[color]}80;
  }
  &:disabled + label::before {
    background-color: #e9ecef;
  }
`

export const RadioLabel = styled(Label)<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  opacity: ${({ disabled = false }) => (disabled ? '0.6' : '1')};
  display: flex;
  cursor: ${({disabled}) => disabled ? "unset" : "pointer"};
  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: ${({ gap = 7 }) => gap}px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
`
