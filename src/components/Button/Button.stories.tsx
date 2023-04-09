import { Button } from './'
import { ButtonProps } from './types'

const buttonPropsDefault: ButtonProps = {
  fullwidth: false,
  disabled: false,
  children: 'Кнопка',
  color: 'lightest',
  background: 'primary'
}

export default {
  title: 'Button',
  component: Button,
  parameters: {
    controls: {
      include: Object.keys(buttonPropsDefault)
    }
  }
}

export const Default = (props: ButtonProps) => (
  <Button {...props}>Кнопка</Button>
)

Default.storyName = 'default'

Default.args = buttonPropsDefault