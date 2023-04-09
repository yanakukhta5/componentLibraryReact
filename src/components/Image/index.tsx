import { FC } from 'react'

import { ImageProps } from './types'
import { Description, Wrapper, Img } from './style'

export const Image: FC<ImageProps> = function ({
  alt,
  src,
  size = 'xs',
  bg = 'backup',
  withDescription = true, ...props
}) {
  return (
    <Wrapper bg={bg}>
      <Img alt={alt} src={src} size={size} {...props} />
      {withDescription && (
        <Description size={size} color="serface">
          {alt}
        </Description>
      )}
    </Wrapper>
  )
}