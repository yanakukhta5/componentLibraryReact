import { Paragraph } from './'
import { sizes } from '@/types'
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
      control: { type: 'select' }
    }
  }
}

const defaultProps: ParagraphProps = {
  size: 'md',
  color: 'darkest'
 }

export const Default = ({ size, color }: ParagraphProps) => (
  <Paragraph size={size} color={color}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi
    similique ducimus labore debitis eum molestiae, voluptas sunt voluptatem
    explicabo quisquam blanditiis in sint, facere iusto est nihil quas.
    Accusamus!
  </Paragraph>
)

Default.args = defaultProps