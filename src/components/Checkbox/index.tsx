import { FC, useState } from 'react'

import { Box, Wrapper, CheckboxLabel } from './style'
import { CheckboxProps } from './types'

export const Checkbox: FC<CheckboxProps> = function ({
  label,
  gap,
  disabled,
  checked = true,
  color = "primary",
  ...props
}) {
  return (
    <Wrapper>
      <Box {...props} color={color} checked={checked} disabled={disabled} type="checkbox" id="checkbox" />
      <CheckboxLabel gap={gap} disabled={disabled} htmlFor="checkbox">
        {label}
      </CheckboxLabel>
    </Wrapper>
  )
}
