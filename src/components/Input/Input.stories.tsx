import { colors } from '@/types'
import { Input } from './'
import { InputProps } from './types'

const defautProps: InputProps = {
  borderColor: "backup",
  background: "peripheral"
}

export default {
  title: 'Input',
  component: Input,
  parameters: {
    controls: {
      include: Object.keys(defautProps)
    }
  },
  argTypes: {
    borderColor: {
      options: Object.values(colors),
      control: { type: 'select' }
    }
  }
}

export const Default = (props: InputProps) => <Input {...props} />

Default.storyName = 'default'

Default.args = defautProps
