import React, { FC, forwardRef, memo } from 'react'
import { LogotypeProps } from './types'
import { Wrapper, LogotypeTitle, LogotypeSubitle, LogotypeImage } from './styles'

export const defaultProps: LogotypeProps = {
  withText: true,
  size: 'lg',
}

export const Logotype: FC<LogotypeProps> = memo(
  forwardRef<HTMLDivElement, LogotypeProps>((props, ref) => {
    return (
      <Wrapper {...props} ref={ref}>
        <LogotypeImage
          className="cui-logotype__img"
          src="./Logotype.svg"
          alt="Изображение логотипа сервиса Кубик"
        />
        <div>
          <LogotypeTitle withText={props.withText} size={props.size}>
            Кубик
          </LogotypeTitle>
          <LogotypeSubitle withText={props.withText} size={props.size}>
            РАСПИСАНИЕ
          </LogotypeSubitle>
        </div>
      </Wrapper>
    )
  })
) 

Logotype.defaultProps = {
  ...defaultProps
}
