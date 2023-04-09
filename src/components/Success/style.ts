import styled from '@emotion/styled'

import { TSize, TColor } from '@/types'

interface WrapperProps {
 background: TColor | string
}

export const Wrapper = styled.section<WrapperProps>`
 width: fit-content;
 background-color: ${({background}) => background};
`
