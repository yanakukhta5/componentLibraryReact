import React from 'react'

import { Button, buttonPropsDefault } from './Button'
import { ButtonProps, ButtonVariants } from './types'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    controls: {
      include: Object.keys(buttonPropsDefault)
    }
  },
  argTypes: {
    variant: {
      options: ButtonVariants,
      control: { type: 'select' }
    },
    fill: {
      control: { type: 'color' }
    },
    fullwidth: {
      control: { type: 'boolean' }
    },
    children: {
      control: { type: 'text' }
    },
    disabled: {
      control: 'boolean'
    }
  }
}

export const Default = ({ children, ...props }: ButtonProps) => (
  <Button {...props}>{children}</Button>
)

export const Secondary = ({ children, ...props }: ButtonProps) => (
  <Button {...props}>{children}</Button>
)

Default.storyName = 'default'

Default.args = { ...buttonPropsDefault }

Secondary.storyName = 'transparent'

Secondary.args = {
  ...buttonPropsDefault,
  variant: 'secondary',
  children: 'Дополнительная кнопка'
}
