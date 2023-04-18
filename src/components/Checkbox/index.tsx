import { FC } from 'react'

import { Box, Wrapper, CheckboxLabel } from './style'
import { CheckboxProps } from './types'

export const Checkbox: FC<CheckboxProps> = function ({
  label,
  gap,
  disabled,
  ...props
}) {
  return (
    <Wrapper>
      <Box {...props} disabled={disabled} type="checkbox" id="checkbox" />
      <CheckboxLabel gap={gap} disabled={disabled} htmlFor="checkbox">
        {label}
      </CheckboxLabel>
    </Wrapper>
  )
}
