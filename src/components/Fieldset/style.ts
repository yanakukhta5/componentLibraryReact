import styled from '@emotion/styled'
import { FieldsetProps, LegendProps } from './types'

export const Component = styled.fieldset<FieldsetProps>`
  display: grid;
  grid-row-gap: 20px;
  border-radius: 6px;
  border: 1px solid ${({theme, borderColor = 'secondary'}) => theme.colors[borderColor]};
  width: fit-content;
  & > * {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const Legend = styled.legend<LegendProps>`
 font-family: ${({theme}) => theme.fonts.primary};
 font-size: 24px;
 margin-bottom: 5px;
 color: ${({theme, borderColor = 'secondary'}) => theme.colors[borderColor]};
`