import { colors } from '@/types'
import { RangeProps } from './types'
import { Range } from './'
import { useState } from 'react'

const defautProps: RangeProps = {
  width: 300,
  height: 15,
  min: 0,
  max: 100,
  color: 'serface',
  circleColor: 'primary',
  fillColor: 'secondary',
  disabled: false
}

export default {
  title: 'Range',
  component: Range,
  parameters: {
    controls: {
      include: Object.keys(defautProps)
    }
  },
  argTypes: {
    color: {
      options: Object.values(colors),
      control: { type: 'select' }
    },
    circleColor: {
      options: Object.values(colors),
      control: { type: 'select' }
    }
  }
  }

export const Default = (props: RangeProps) =>{
 const [value, setValue] = useState(50)
 return <Range value={value} {...props} onInput={(event) => setValue(+(event?.target as HTMLInputElement).value) } />
}

Default.storyName = 'default'

Default.args = defautProps
