import { Success } from './'
import { SuccessProps } from './types'

const successPropsDefault: SuccessProps = {
  width: 180,
  strokeWidth: 7,
  stroke: 'primary',
  fill: 'lightest',
  persent: 75,
  duration: 0.5,
  substrate: 'backup'
}

export default {
  title: 'Success',
  component: Success,
  parameters: {
    controls: {
      include: Object.keys(successPropsDefault)
    }
  }
}

export const Default = (props: SuccessProps) => <Success {...props} />

Default.storyName = 'default'

Default.args = successPropsDefault
