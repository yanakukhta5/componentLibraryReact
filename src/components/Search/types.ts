import { ChangeEvent, HTMLAttributes } from 'react'

export type SearchProps = HTMLAttributes<HTMLFormElement> & Partial<{
  startValue: string
  onInputFunc: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  fullwidth: boolean
  disabled: boolean
  value: string
}>
