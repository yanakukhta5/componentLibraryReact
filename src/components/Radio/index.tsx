import { FC } from 'react'

import { Circle, Wrapper, RadioLabel } from './style'
import { RadioProps } from './types'

export const Radio: FC<RadioProps> = function ({
  label,
  gap,
  disabled,
  ...props
}) {
  return (
    <Wrapper>
      <Circle {...props} disabled={disabled} type="radio" id="checkbox" />
      <RadioLabel gap={gap} disabled={disabled} htmlFor="checkbox">
        {label}
      </RadioLabel>
    </Wrapper>
  )
}
