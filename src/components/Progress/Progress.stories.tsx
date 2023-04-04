import { Progress } from './'
import { ProgressProps } from './types'

import { colors } from '@/types'

const baseProps: ProgressProps = {
  fullwidth: false,
  height: 20,
  background: 'primary',
  radius: 10,
  value: 50,
  description: 'Описание прогресса'
 }

export default {
  title: 'Progress',
  component: Progress,
  parameters: {
    controls: {
      include: Object.keys(baseProps)
    }
  },
  argTypes: {
    background: {
      options: Object.values(colors),
      control: { type: 'select' }
    }
  }
}

export const Default = (props: ProgressProps) => (
  <Progress {...props} />
)

Default.storyName = 'default'

Default.args = {
  ...baseProps
}
