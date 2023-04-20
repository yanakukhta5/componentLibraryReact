import styled from "@emotion/styled"

import { FormProps } from "./types"

export const Component = styled.form<FormProps>`
 width: ${({width = 300}) => width}px;
 display: flex;
 background-color: white;
 border-radius: 10px;
 padding: 20px;
 align-items: flex-start;
 flex-direction: column;
 border: 1px solid ${({theme, borderColor = 'additional'}) => theme.colors[borderColor]};
 gap: 20px;
`