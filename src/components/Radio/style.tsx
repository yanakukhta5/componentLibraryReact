import styled from '@emotion/styled'

import { LabelProps } from './types'

import { Input } from '../Input'
import { Label } from '../Label'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Circle = styled(Input)`
  width: unset;
  position: absolute;
  z-index: -1;
  opacity: 0;
  &:checked + label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: #b3d7ff;
  }
  &:not(:disabled):active + label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  &:focus + label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  &:focus:not(:checked) + label::before {
    border-color: #80bdff;
  }
  &:disabled + label::before {
    background-color: #e9ecef;
  }
`

export const RadioLabel = styled(Label)<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  opacity: ${({ disabled = false }) => (disabled ? '0.6' : '1')};
  display: flex;
  cursor: pointer;
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
