import { Success } from './'
import { sizes } from '@/types'
import { SuccessProps } from './types'

export default {
  title: 'Success',
  component: Success,
  parameters: {
    controls: {
      include: ['size', 'color']
    }
  },
  argTypes: {
    size: {
      options: Object.values(sizes),
      control: { type: 'select' }
    }
  }
}

export const Default = ({ }: SuccessProps) => (
  <p></p>
)

Default.args = {
  size: 'md',
  color: 'darkest'
}
