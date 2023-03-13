import { BaseProps } from '@/shared/types'

export const arrowDisplays = ['left', 'right', 'none'] as const

export type TArrowDisplay = typeof arrowDisplays[number]

export type TAccordionProps = BaseProps & {
  buttonContent: string
  initialIsOpen: boolean
  arrowDisplay?: TArrowDisplay
}
