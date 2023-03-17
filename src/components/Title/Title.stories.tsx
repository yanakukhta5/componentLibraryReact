import { Title } from './'
import { TitleProps } from './types'

import { sizes } from '@/types'

export default {
  title: 'Title',
  component: Title,
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

export const Default = ({ size, color }: TitleProps) => (
  <Title size={size} color={color}>
    Lorem ipsum dolor
  </Title>
)

Default.args = {
  size: 'md',
  color: 'darkest'
}
