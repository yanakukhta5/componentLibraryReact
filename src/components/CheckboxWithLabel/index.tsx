import { FC } from 'react'

import { Checkbox, Wrapper, CheckboxLabel } from './style'
import { CheckboxWithLabelProps } from './types'

export const CheckboxWithLabel: FC<CheckboxWithLabelProps> = function ({
  children,
  gap,
  disabled,
  ...props
}) {
  return (
    <Wrapper gap={gap}>
      <Checkbox {...props} disabled={disabled} type="checkbox" id="checkbox" />
      <CheckboxLabel disabled={disabled} htmlFor="checkbox">
        {children}
      </CheckboxLabel>
    </Wrapper>
  )
}
