import { HTMLAttributes } from "react"
import { TColor, TSize } from "@/types"

export type LoaderProps = HTMLAttributes<HTMLSpanElement> & Partial<{
 color: TColor
 size: TSize
}>
