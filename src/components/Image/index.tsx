import { FC } from "react";

import { ImageProps } from './types'

export const Image: FC<ImageProps> = function({alt, src}){
 return (
  <img alt={alt} src={src} />
 )
}