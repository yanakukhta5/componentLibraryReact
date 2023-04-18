import { FC } from 'react'
import { LoaderProps } from './types'
import { Wrapper } from './style'

export const Loader: FC = function ({
  color = 'primary',
  size = 'md',
  ...props
}: LoaderProps) {
  return <Wrapper color={color} size={size} {...props} />
}
