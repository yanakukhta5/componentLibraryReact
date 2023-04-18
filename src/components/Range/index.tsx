import { FC } from "react"

import { Component } from './style'

import { RangeProps } from './types'

export const Range : FC<RangeProps> = function({width = 300, height = 4, value = 50, min = 0, max = 100, circleSize = 22, color="serface", circleColor = "primary", active=true, fillColor = 'secondary', ...props}){
  return (
   <Component type="range" {...props} width={width} height={height} value={value} min={min} max={max} circleSize={circleSize} color={color} circleColor={circleColor} active={active} />
  )
}