import React from 'react'

import { Logotype } from './Logotype'
import { LogotypeProps } from './types'
import { sizes } from './styles'

export default {
  title: 'Logotype',
  component: Logotype,
  parameters: {
    controls: {
      include: ['size', 'withText']
    }
  },
  argTypes: {
    size: {
      options: Object.keys(sizes),
      control: { type: 'radio' }
    },
    withText: {
      control: { type: 'boolean' }
    }
  }
}

export const Default = ({ size, withText }: LogotypeProps) => <Logotype size={size} withText={withText} />

Default.story = {
  name: 'default'
}

Default.args = {
  size: 'lg',
  withText: false 
}
