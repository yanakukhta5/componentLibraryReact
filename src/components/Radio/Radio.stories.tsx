import { Radio } from '.'
import { RadioProps } from './types'

const radioPropsDefault: RadioProps = {
  disabled: false,
  checked: false,
  gap: 7,
  label: 'Радио кнопка',
  color: 'primary'
}

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    controls: {
      include: Object.keys(radioPropsDefault)
    }
  }
}

export const Default = (props: RadioProps) => <Radio {...props} />

Default.storyName = 'default'

Default.args = radioPropsDefault
