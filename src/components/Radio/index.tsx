import { FC } from 'react'

import { Circle, Wrapper, RadioLabel } from './style'
import { RadioProps } from './types'

export const Radio: FC<RadioProps> = function ({
  label,
  gap,
  disabled,
  checked,
  color = "primary",
  ...props
}) {
  console.log(checked)
  return (
    <Wrapper>
      <Circle color={color} checked={checked} disabled={disabled} type="radio" id="checkbox" {...props} />
      <RadioLabel gap={gap} disabled={disabled} htmlFor="checkbox">
        {label}
      </RadioLabel>
    </Wrapper>
  )
}
