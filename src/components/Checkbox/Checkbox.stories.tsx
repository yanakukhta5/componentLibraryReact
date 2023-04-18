import { Checkbox } from '.'
import { CheckboxProps } from './types'

const checkboxPropsDefault: CheckboxProps = {
  disabled: false,
  checked: false,
  gap: 7,
  label: 'Чекбокс',
  color: 'primary'
}

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    controls: {
      include: Object.keys(checkboxPropsDefault)
    }
  }
}

export const Default = (props: CheckboxProps) => <Checkbox {...props} />

Default.storyName = 'default'

Default.args = checkboxPropsDefault
