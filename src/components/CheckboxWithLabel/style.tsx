import styled from "@emotion/styled"

import { WrapperProps, LabelProps } from './types'

import { Input } from "../Input"
import { Label } from "../Label"

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  gap: ${({gap = 5}) => gap}px;
`

export const Checkbox = styled(Input)`
  width: unset;
`

export const CheckboxLabel = styled(Label)<LabelProps>`
  opacity: ${({disabled = false}) => disabled ? '0.6' : '1'};
`