import { Checkbox } from '.'
import { CheckboxProps } from './types'
import { useState } from 'react'

const checkboxPropsDefault: CheckboxProps = {
  disabled: false,
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

export const Default = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  return <Checkbox checked={checked} onChange={() => { setChecked(prev => !prev)}} {...props} />
}

Default.storyName = 'default'

Default.args = checkboxPropsDefault
