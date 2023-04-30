import { FC } from 'react'

import { Component, Legend } from './style'

import { FieldsetProps } from './types'

export const Fieldset: FC<FieldsetProps> = function({disabled = false, legend = "", borderColor = "secondary", children, ...props}){
 return (
  <Component disabled={disabled} borderColor={borderColor} {...props}>
   <Legend borderColor={borderColor}>{legend}</Legend>
   {children}
  </Component>
 )
}