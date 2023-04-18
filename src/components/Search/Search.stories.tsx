import { Search } from './'
import { SearchProps } from './types'

import { colors } from '@/types'

const baseProps: SearchProps = {
  startValue: 'lwjdlwkjd',
  placeholder: 'строка поиска'
}

export default {
  title: 'Search',
  component: Search,
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

export const Default = (props: SearchProps) => <Search {...props} />

Default.storyName = 'default'

Default.args = baseProps
