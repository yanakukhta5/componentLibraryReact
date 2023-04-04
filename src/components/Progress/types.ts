import { HTMLProps } from 'react'

import { TColor } from '@/types'

export type WrapperProgressProps = HTMLProps<HTMLDivElement> & Partial<{
 description: string
 afterTop: number
 afterColor: TColor
 height: number
}>

export type ProgressProps = HTMLProps<HTMLProgressElement> & WrapperProgressProps & Partial<{
 fullwidth: boolean
 background: TColor
 radius: number
 value: number
 height: number
}>

export type 