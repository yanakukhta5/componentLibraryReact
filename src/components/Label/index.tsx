import { FC } from 'react'
import { LabelProps } from './types'
import { Wrapper } from './style'

export const Label: FC<LabelProps> = function (props) {
  return <Wrapper {...props} />
}
