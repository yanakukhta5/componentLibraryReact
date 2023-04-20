import { Form } from '.'
import { FormProps } from './types'
import { Label } from '../Label'
import { Input } from '../Input'
import { Button } from '../Button'

const defautProps: FormProps = {
  borderColor: "peripheral",
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
  <Input id='first' name='first' width={300} />
  </Label>
  <Label htmlFor='Second'>
    Second input
  <Input id='second' name='second' width={300} />
  </Label>
  <Button fullwidth={false}>Submit</Button>
</Form>

Default.storyName = 'default'

Default.args = defautProps
