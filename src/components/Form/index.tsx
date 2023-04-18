import { FC } from "react"

import { Component } from './style'
import { FormProps } from './types'

export const Form: FC<FormProps> = function({borderColor = 'additional', ...props}){
 return (
  <Component borderColor={borderColor} {...props} />
 )
}