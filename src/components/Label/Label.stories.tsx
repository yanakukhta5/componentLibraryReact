import { Label } from '.'
import { LabelProps } from './types'

const LabelDefault: LabelProps = {
  htmlFor: '#',
  children: 'Содержимое компонента лейбл'
}

export default {
  title: 'Label',
  component: Label,
  parameters: {
    controls: {
      include: Object.keys(LabelDefault)
    }
  }
}

export const Default = (props: LabelProps) => <Label {...props} />

Default.storyName = 'default'

Default.args = LabelDefault
