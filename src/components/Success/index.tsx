import { FC } from 'react'

import { SuccessProps } from './types'
import { Svg, Circle, Substrate } from './style'

export const Success: FC<SuccessProps> = function ({
  width = 180,
  stroke = 'primary',
  strokeWidth = 7,
  fill = 'lightest',
  duration = 0.5,
  substrate = 'backup',
  persent,
  ...props
}) {
  return (
    <Svg width={width} {...props}>
      <Substrate
        fill={fill}
        stroke={substrate}
        strokeWidth={strokeWidth}
        cx={width / 2}
        cy={width / 2}
        r={width / 2 - strokeWidth * 2}
      />
      <Circle
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        cx={width / 2}
        cy={width / 2}
        r={width / 2 - strokeWidth * 2}
        persent={persent}
      />
    </Svg>
  )
}
