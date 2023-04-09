import { HTMLAttributes } from 'react'

import { TColor } from '@/types'

export type WrapperProgressProps = HTMLAttributes<HTMLDivElement> & Partial<{
 description: string
 afterTop: number
 afterColor: TColor
 height: number
}>

export type ProgressProps = HTMLAttributes<HTMLProgressElement> & WrapperProgressProps & Partial<{
 background: TColor
 fullwidth: boolean
 radius: number
 value: number
 height: number
}>
