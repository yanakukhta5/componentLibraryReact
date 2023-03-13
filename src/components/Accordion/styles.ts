import styled from '@emotion/styled'
import { EColor } from '@/shared/tokens/colors'
import { Button } from '../Button'

export const Wrapper = styled.div`
  border: 1px solid ${EColor.peripheral}70;
  border-radius: 6px;
`

// export const AccordionHeader = styled.div<{ arrowdisplay?: TArrowDisplay }>`
//   display: flex;
//   position: relative;
//   z-index: 2;
//   padding: 0px;
//   gap: 5px;
//   cursor: pointer;
//   user-select: none;
//   padding: 16px;
//   flex-direction: ${(props) => (props.arrowdisplay === 'left' ? 'initial' : 'row-reverse')};;
// `

