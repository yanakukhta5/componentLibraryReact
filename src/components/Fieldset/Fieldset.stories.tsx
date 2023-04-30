import { colors } from '@/types'
import { Fieldset } from './'
import { FieldsetProps } from './types'
import { Input } from '../Input'
import { Label } from '../Label'

const defautProps: FieldsetProps = {
  legend: "Legend",
  disabled: false,
  borderColor: "secondary",
}

export default {
  title: 'Fieldset',
  component: Fieldset,
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

export const Default = (props: FieldsetProps) => <Fieldset {...props} >
  <Label htmlFor='first'>
    First input
  <Input id='first' name='first' width={300} />
  </Label>
  <Label htmlFor='Second'>
    Second input
  <Input id='second' name='second' width={300} />
  </Label>
</Fieldset>

Default.storyName = 'default'

Default.args = defautProps
