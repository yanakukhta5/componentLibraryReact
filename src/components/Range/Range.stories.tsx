import { sizes, colors } from '@/types'
import { RangeProps } from './types'
import { Range } from './'

const defautProps: RangeProps = {
  width: 300,
  height: 4,
  value: 50,
  min: 0,
  max: 100,
  color: 'serface',
  circleSize: 22,
  circleColor: 'primary',
  active: true,
  fillColor: 'secondary'
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
