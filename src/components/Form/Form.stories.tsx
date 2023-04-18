import { Form } from '.'
import { FormProps } from './types'
import { Label } from '../Label'
import { Input } from '../Input'
import { Button } from '../Button'

const defautProps: FormProps = {
  borderColor: "peripheral",
  width: 300
}

export default {
  title: 'Form',
  component: Form,
  parameters: {
    controls: {
      include: Object.keys(defautProps)
    }
  }
}

export const Default = (props: FormProps) => <Form {...props}>
  <Label htmlFor='first'>
    First input
  <Input id='first' name='first' />
  </Label>
  <Label htmlFor='Second'>
    Second input
  <Input id='second' name='second' />
  </Label>
  <Button fullwidth={false}>Submit</Button>
</Form>

Default.storyName = 'default'

Default.args = defautProps
