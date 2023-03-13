import { CSSProperties, ReactNode, ElementType } from 'react'

export type BaseProps = {
  children?: ReactNode // | ReactNode[]
  key?: string
  style?: CSSProperties
  className?: string
  as?: ElementType<any>
  [key: string]: any // maybe delete
}

export const Sizes = ['sm', 'md', 'lg', 'x', 'xs'] as const

export type TSize = typeof Sizes[number]

