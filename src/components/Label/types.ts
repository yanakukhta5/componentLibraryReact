import { HTMLAttributes, ReactNode } from 'react'

export type LabelProps = HTMLAttributes<HTMLLabelElement> & {
  htmlFor: string
}
