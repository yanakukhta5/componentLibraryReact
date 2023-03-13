import React from 'react'

import { Tag, TagProps } from './Tag'

export default {
  title: 'Tag',
  component: Tag,
  parameters: {
    controls: {
      include: ['text'],
      exclude: []
    }
  },
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    color: {
      control: { type: 'color' }
    },
  }
}

export const Default = ({ text, color }: TagProps) => <Tag text={text} color={color} />

Default.story = {
  name: 'default'
}

Default.args = {
  text: 'text'
}
