import { CSSProperties, ReactNode, ElementType } from 'react'

export type BaseProps = {
  children?: ReactNode // | ReactNode[]
  key?: string
  style?: CSSProperties
  className?: string
  as?: ElementType<any>
  [key: string]: any // maybe delete
}

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

const constSizes: readonly string[]  = sizes

export const colors = ['primary', 'secondary', 'tertiary', 'serface', 'darkest', 'additional', 'peripheral', 'subordinate', 'backup', 'lightest', 'error', 'success', 'warning'] as const

export type TSize = typeof constSizes[number] 

export type TColor = typeof colors[number]