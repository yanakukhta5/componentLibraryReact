import styled from '@emotion/styled'

import { StyleSvgProps, StyleCircleProps } from './types'

export const Svg = styled.svg<StyleSvgProps>`
  width: ${({ width = 180 }) => width}px;
  height: ${({ width = 180 }) => width}px;
`

export const Substrate = styled.circle<StyleCircleProps>`
  stroke-width: ${({ strokeWidth = 7 }) => strokeWidth}px;
  stroke: ${({ theme, stroke = 'backup' }) => theme.colors[stroke]};
`

export const Circle = styled.circle<StyleCircleProps>`
  transition: all ${({ duration = 0.5 }) => duration}s ease-in-out;
  transform-origin: center;
  transform: rotate(-90deg);
  stroke: ${({ theme, stroke = 'primary' }) => theme.colors[stroke]};
  stroke-width: ${({ strokeWidth = 7 }) => strokeWidth}px;
  stroke-linecap: round;
  fill: ${({ theme, fill = 'lightest' }) => theme.colors[fill]};
  stroke-dasharray: ${({ r = 1 }) => {
    const circumference = 2 * Math.PI * r
    return `${circumference} ${circumference}`
  }};
  stroke-dashoffset: ${({ r = 1, persent = 1 }) => {
    const circumference = 2 * Math.PI * r
    return circumference - (persent / 100) * circumference
  }};
`
