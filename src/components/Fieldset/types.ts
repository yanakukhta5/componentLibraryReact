import { HTMLAttributes } from "react"
import { TColor } from "@/types"

export type LegendProps = HTMLAttributes<HTMLLegendElement> & Partial<{
 borderColor: TColor
}>

export type FieldsetProps = HTMLAttributes<HTMLFieldSetElement> & Partial<{
 legend: string
 disabled: boolean
}> & LegendProps