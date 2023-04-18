import { sizes } from '@/types'
import { ImageProps } from './types'
import { Image } from './'

import { imgSize } from './style'

console.log(imgSize)

const defautPropsImage: ImageProps = {
  alt: '',
  src: '',
  size: 'xs',
  bg: 'backup',
  withDescription: true
}

export default {
  title: 'Image',
  component: Image,
  parameters: {
    controls: {
      include: Object.keys(defautPropsImage)
    }
  },
  argTypes: {
    size: {
      options: Object.values(sizes),
      control: { type: 'select' }
    }
  }
}

export const Default = (props: ImageProps) => <Image {...props} />

Default.args = {
  ...defautPropsImage,
  alt: 'Подпись к изображению',
  src: '/Logotype.svg'
}
