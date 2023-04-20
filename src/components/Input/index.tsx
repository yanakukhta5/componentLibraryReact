import { FC } from 'react'
import { Component } from './style'
import { InputProps } from './types'

export const Input : FC<InputProps> = ({borderColor = "peripheral", name="", ...props}) => {
  return <Component borderColor={borderColor} name={name} {...props} />
}