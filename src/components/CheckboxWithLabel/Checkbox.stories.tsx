import { CheckboxWithLabel } from '.'
import { CheckboxWithLabelProps } from './types'

const checkboxPropsDefault: CheckboxWithLabelProps = {
  disabled: false,
  checked: false,
  gap: 5,
  children: 'Чекбокс'
}

export default {
  title: 'CheckboxWithLabel',
  component: CheckboxWithLabel,
  parameters: {
    controls: {
      include: Object.keys(checkboxPropsDefault)
    }
  }
}

export const Default = (props: CheckboxWithLabelProps) => (
  <CheckboxWithLabel {...props} />
)

Default.storyName = 'default'

Default.args = checkboxPropsDefault