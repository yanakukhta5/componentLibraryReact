import { FC } from "react"

import { Component, Wrapper } from './style'

import { RangeProps } from './types'

export const Range : FC<RangeProps> = function({disabled = false, value = 0, width = 300, height = 15, min = 0, max = 100, color="serface", circleColor = "primary", fillColor = 'secondary', ...props}){
  return (
    <Wrapper width={width} height={height}>
      <Component value={value} type="range" disabled={disabled} min={min} max={max} circleSize={height} color={color} circleColor={circleColor} fillColor={fillColor} {...props} />
    </Wrapper>
  )
}