import { sizes, colors } from '@/types'
import { LoaderProps } from './types'
import { Loader } from './'

const defautPropsLoader: LoaderProps = {
  color: 'primary',
  size: 'md'
}

export default {
  title: 'Loader',
  component: Loader,
  parameters: {
    controls: {
      include: Object.keys(defautPropsLoader)
    }
  },
  argTypes: {
    size: {
      options: Object.values(sizes),
      control: { type: 'select' }
    },
    color: {
      options: Object.values(colors),
      control: { type: 'select' }
    }
  }
}

export const Default = (props: LoaderProps) => <Loader {...props} />

Default.storyName = 'default'

Default.args = defautPropsLoader
