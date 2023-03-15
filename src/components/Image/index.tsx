import { FC } from 'react'

import { ImageProps } from './types'
import { Description, Wrapper, Img } from './style'

export const defautPropsImage: ImageProps = {
  alt: '',
  src: '',
  size: 'xs',
  bg: 'backup',
  withDescription: true
}

export const Image: FC<ImageProps> = function ({
  alt,
  src,
  size,
  bg,
  withDescription
}) {
  return (
    <Wrapper bg={bg}>
      <Img alt={alt} src={src} size={size} />
      {withDescription && (
        <Description size={size} color="serface">
          {alt}
        </Description>
      )}
    </Wrapper>
  )
}

Image.defaultProps = defautPropsImage
