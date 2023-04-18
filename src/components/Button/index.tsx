import { FC } from 'react'

import { Wrapper } from './style'
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = function (props) {
  return <Wrapper {...props} />
}
