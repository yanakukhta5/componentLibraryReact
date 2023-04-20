import { Paragraph } from './'
import { ParagraphProps } from './types'

const defaultParagraphProps: ParagraphProps = {
  fontSize: 16,
  color: 'darkest'
}

export default {
  title: 'Paragraph',
  component: Paragraph,
  parameters: {
    controls: {
      include: Object.keys(defaultParagraphProps)
    }
  }
}

export const Default = ({ fontSize, color }: ParagraphProps) => (
  <Paragraph fontSize={fontSize} color={color}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi
    similique ducimus labore debitis eum molestiae, voluptas sunt voluptatem
    explicabo quisquam blanditiis in sint, facere iusto est nihil quas.
    Accusamus!
  </Paragraph>
)

Default.args = defaultParagraphProps
