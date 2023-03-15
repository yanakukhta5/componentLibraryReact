import { FC } from 'react'

import { Wrapper } from './styles'
import { ButtonProps } from './types'

export const buttonPropsDefault: ButtonProps = {
  fullwidth: false,
  disabled: false,
  children: 'Кнопка',
  color: 'lightest',
  background: 'primary'
}

const Button: FC<ButtonProps> = function (props) {
  return <Wrapper {...props} />
}

Button.defaultProps = buttonPropsDefault

export { Button }
