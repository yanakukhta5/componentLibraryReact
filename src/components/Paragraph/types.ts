import { ReactNode } from "react";

import { TSize, TColor } from '@/types'

export interface ParagraphProps {
 children: ReactNode,
 size: TSize,
 color: TColor
}