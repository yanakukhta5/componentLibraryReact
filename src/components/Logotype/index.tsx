import { FC, memo } from 'react'

import { LogotypeProps } from './types'
import { Wrapper, LogotypeTitle, LogotypeSubitle, LogotypeImage } from './style'

export const Logotype: FC<LogotypeProps> = ({
  withText = false,
  size = 'lg',
  ...props
}) => {
  return (
    <Wrapper size={size} {...props}>
      <LogotypeImage
        className="cui-logotype__img"
        src="./Logotype.svg"
        alt="Изображение логотипа сервиса Кубик"
      />
      <div>
        <LogotypeTitle withText={withText} size={size}>
          Кубик
        </LogotypeTitle>
        <LogotypeSubitle withText={withText} size={size}>
          РАСПИСАНИЕ
        </LogotypeSubitle>
      </div>
    </Wrapper>
  )
}
