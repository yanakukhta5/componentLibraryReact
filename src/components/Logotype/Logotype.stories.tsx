import { Logotype, defaultProps } from './'
import { LogotypeProps } from './types'
import { sizes } from './style'

export default {
  title: 'Logotype',
  component: Logotype,
  parameters: {
    controls: {
      include: ['size', 'withText']
    }
  },
  argTypes: {
    size: {
      options: Object.keys(sizes),
      control: { type: 'select' }
    }
  }
}

export const Default = ({ size, withText }: LogotypeProps) => (
  <Logotype size={size} withText={withText} />
)

Default.args = {
  ...defaultProps
}
