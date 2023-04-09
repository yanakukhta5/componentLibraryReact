import { TColor } from "@/types"

import { SingleSuccess } from './SvgSircle/types'

export interface SuccessProps {
 data: Array<SingleSuccess>
 title: string
 withDescription: boolean
 background: TColor | 'string'
}