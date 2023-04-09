import { HTMLAttributes, ReactNode } from "react"

export type WrapperProps = Partial<{
 gap: number
}>

export type CheckboxProps = HTMLAttributes<HTMLInputElement> & Partial<{
 disabled: boolean
 checked: boolean
}>

export type LabelProps = Partial<{
 disabled: boolean
 checked: boolean
}>

export type CheckboxWithLabelProps = CheckboxProps & WrapperProps & {
 children: ReactNode
}