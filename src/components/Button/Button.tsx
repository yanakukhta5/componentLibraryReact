import styled from '@emotion/styled'
import React, { forwardRef, memo } from 'react'

import { styles } from './styles'
import { ButtonProps, ButtonVariants } from './types'

export const buttonPropsDefault: ButtonProps = {
  fullwidth: false,
  variant: 'primary',
  disabled: false,
  children: 'Кнопка'
}

const Wrapper = memo(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return <button {...props} ref={ref} />
  })
)

export const Button = styled(Wrapper)<ButtonProps>`
  box-sizing: border-box;
  border-radius: 6px;
  border: 0px;
  min-width: 112px;
  width: ${(props) => (props.fullwidth ? '100%' : 'auto')};
  transition: all 0.1s ease-in-out;
  padding: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:focus-visible {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  }

  &:disabled,
  &:active {
    transform: initial;
    box-shadow: none;
  }

  ${(props) => {
    if (props.variant && ButtonVariants.includes(props.variant)) return styles[props.variant]
    return ''
  }}

  ${(props) => props.disabled && styles.disabled}
`

Button.defaultProps = {
  ...buttonPropsDefault
}
