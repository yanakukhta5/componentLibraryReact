import { sizes } from '@/types'
import { ImageProps } from './types'
import { Image, defautPropsImage } from './'

export default {
  title: 'Image',
  component: Image,
  parameters: {
    controls: {
      include: Object.keys(defautPropsImage)
    }
  },
}

export const Default = ( props : ImageProps) => (
  <Image {...props} />
)

Default.args = {
  ...defautPropsImage,
 alt: 'Подпись к изображению',
 src: '/Logotype.svg',
}
