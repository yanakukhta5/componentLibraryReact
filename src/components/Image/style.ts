import styled from '@emotion/styled'
import { Paragraph } from '../Paragraph'

import { TSize, TColor, colors } from '@/types'

const imgSize = {
 xs: '200',
 sm: '300',
 md: '350',
 lg: '400',
 xl: '500',
 xxl: '600'
}

export const Wrapper = styled.figure<{bg: TColor}>(({bg, theme}) => ({
 display: 'flex',
 justifyContent: 'center',
 flexDirection: 'column',
 gap: '10px',
 width: 'fit-content',
 backgroundColor: theme.colors[bg],
 borderRadius: '6px',
 padding: '10px'
}))

export const Description = styled(Paragraph)`
 text-align: center;
`.withComponent('figcaption')

export const Img = styled.img<{size: TSize}>`
 object-fit: cover;
 width: ${({size}) => typeof size === 'string' ? imgSize[size] : size}px;
 margin: auto;
`