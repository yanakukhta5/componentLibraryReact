import { FC } from 'react'

import { ProgressProps } from './types'
import { Wrapper, Component, ProgressOverflow } from './style'

export const Progress: FC<ProgressProps> = function ({
  value = 50,
  description = '',
  height = 20,
  fullwidth = false,
  afterColor = 'backup',
  radius = 10,
  ...props
}) {
  return (
    <Wrapper
      description={description}
      afterColor={afterColor}
      afterTop={height}
      height={height}
    >
      <ProgressOverflow fullwidth={fullwidth} radius={radius}>
        <Component value={value} max={100} {...props} />
      </ProgressOverflow>
    </Wrapper>
  )
}
