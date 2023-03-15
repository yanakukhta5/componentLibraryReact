import { Paragraph } from './'
import { colors, sizes } from '@/types'
import { ParagraphProps } from './types'

export default {
  title: 'Paragraph',
  component: Paragraph,
  parameters: {
    controls: {
      include: ['size', 'color']
    }
  },
  argTypes: {
    size: {
      options: Object.values(sizes),
      control: { type: 'radio' }
    },
    color: {
      options: Object.values(colors),
      control: { type: 'radio' }
    }
  }
}

export const Default = ({ size, color }: ParagraphProps) => (
  <Paragraph size={size} color={color}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi
    similique ducimus labore debitis eum molestiae, voluptas sunt voluptatem
    explicabo quisquam blanditiis in sint, facere iusto est nihil quas.
    Accusamus!
  </Paragraph>
)

Default.args = {
  size: 'md',
  color: 'darkest'
}
