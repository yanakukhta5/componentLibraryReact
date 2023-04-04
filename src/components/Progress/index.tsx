import { FC } from 'react'

import { ProgressProps } from './types'
import { Wrapper, Component } from './style'

export const Progress: FC<ProgressProps> = function ({
  value = 50,
  description = '',
  height = 20,
  ...props
}) {
  return (
    <Wrapper description={description} afterTop={height} height={height}>
      <ProgressOverflow>
        <Component value={value} max={100} height={height} {...props} />
      </ProgressOverflow>
    </Wrapper>
  )
}
