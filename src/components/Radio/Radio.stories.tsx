import { Radio } from '.'
import { RadioProps } from './types'
import { useState } from 'react'

const radioPropsDefault: RadioProps = {
  disabled: false,
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

export const Default = (props: RadioProps) => {
  const [checked, setChecked] = useState(false)
  return <Radio {...props} checked={checked} onClick={() => { setChecked(prev => !prev)}} {...props} />
}

Default.storyName = 'default'

Default.args = radioPropsDefault
