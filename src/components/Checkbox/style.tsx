import styled from '@emotion/styled'

import { LabelProps } from './types'

import { Input } from '../Input'
import { Label } from '../Label'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Box = styled(Input)`
  width: unset;
  position: absolute;
  z-index: -1;
  opacity: 0;
  &:checked + label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
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

export const CheckboxLabel = styled(Label)<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  opacity: ${({ disabled = false }) => (disabled ? '0.6' : '1')};
  cursor: pointer;
  align-items: baseline;
  display: flex;
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
