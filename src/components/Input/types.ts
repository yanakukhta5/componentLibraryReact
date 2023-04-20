import { TColor } from "@/types"
import { HTMLAttributes } from "react"

export type InputProps = HTMLAttributes<HTMLInputElement> & Partial<{
 borderColor: TColor
 name: string
 type:  string
 value: string
 width: number
}>