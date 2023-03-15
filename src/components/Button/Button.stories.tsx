import { Button, buttonPropsDefault } from './'
import { ButtonProps } from './types'
import { colors } from '@/types'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    controls: {
      include: Object.keys(buttonPropsDefault)
    }
  }
}

export const Default = (props: ButtonProps) => <Button {...props} />

Default.storyName = 'default'

Default.args = { ...buttonPropsDefault }
