import styled from '@emotion/styled'
import { Paragraph } from '../Paragraph'

import { TSize, TColor } from '@/types'

import { assosiateArrayWithSizes } from '@/utils'

const imgSizeArr = [200, 300, 350, 400, 500, 600]

export const imgSize = assosiateArrayWithSizes(imgSizeArr)

export const Wrapper = styled.figure<{ bg: TColor }>(({ bg, theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '10px',
  width: 'fit-content',
  backgroundColor: theme.colors[bg],
  borderRadius: '6px',
  padding: '10px',
  fontFamily: theme.fonts.secondary
}))

export const Description = styled(Paragraph)`
  text-align: center;
`.withComponent('figcaption')

export const Img = styled.img<{ size: TSize }>`
  object-fit: cover;
  width: ${({ size }) => imgSize[size]}px;
  margin: auto;
`
