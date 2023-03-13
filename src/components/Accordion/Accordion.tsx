import React, {
  FC,
  forwardRef,
  LegacyRef,
  memo,
  useRef,
  useEffect,
  useCallback,
  useState
} from 'react'
import { TAccordionProps } from './types'
import {
  Wrapper,
  AccordionHeader,
  AccordionBody,
  Arrow,
  AccordionTextButton
} from './styles'

export const accordionPropsDefault: TAccordionProps = {
  buttonContent: 'Текст в заголовке кнопки',
  arrowDisplay: 'left',
  initialIsOpen: false
}

export const Accordion: FC<TAccordionProps> = memo(
  forwardRef((props, ref) => {
    return (
      <Wrapper ref={ref as LegacyRef<any>} {...props}>
        <AccordionHeader ref={header} arrowdisplay={props.arrowDisplay}>
          <Arrow
            iscontentshown={isContentShown}
            arrowdisplay={props.arrowDisplay}
            variant="text"
          >
            <span>❯</span>
          </Arrow>
          <AccordionTextButton variant="text" fullwidth>
            {props.buttonContent}
          </AccordionTextButton>
        </AccordionHeader>
        <AccordionBody iscontentshown={isContentShown}>
          {props.children}
        </AccordionBody>
      </Wrapper>
    )
  })
)

Accordion.displayName = 'Accordion'

Accordion.defaultProps = {
  ...accordionPropsDefault
}
