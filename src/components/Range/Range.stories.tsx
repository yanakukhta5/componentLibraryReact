import { sizes, colors } from '@/types'
import { RangeProps } from './types'
import { Range } from './'

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
    size: {
      options: Object.values(sizes),
      control: { type: 'select' }
    },
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

export const Default = (props: RangeProps) => <Range {...props} />

Default.storyName = 'default'

Default.args = defautProps
