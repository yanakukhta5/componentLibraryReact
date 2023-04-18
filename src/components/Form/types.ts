import { TColor } from "@/types"
import { HTMLAttributes } from "react"

export type FormProps = HTMLAttributes<HTMLFormElement> & Partial<{
 borderColor: TColor
 width: number
}>