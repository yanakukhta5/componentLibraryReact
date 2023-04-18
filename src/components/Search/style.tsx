import styled from '@emotion/styled'

import { Button } from '../Button'
import { Input } from '../Input'

import { SearchProps } from './types'

export const Wrapper = styled.form<SearchProps>`
  width: ${({ fullwidth = false }) =>
    fullwidth ? '100%' : 'clamp(280px, 40%, 500px)'};
  height: 40px;
  display: flex;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.peripheral};
  border-radius: 6px;
`

export const Submit = styled(Button)`
  aspect-ratio: 1 / 1;
  min-width: unset;
  background-image: url('/img/svg/search.svg');
  background-repeat: no-repeat;
  background-size: 55%;
  background-position: center;
  position: absolute;
  height: 100%;
  right: 0;
  height: calc(100% + 2px);
  top: -1px;
  right: -1px;
  &:hover {
    transform: unset;
  }
`

export const Query = styled(Input)`
  width: 100%;
  font-family: 'Roboto';
`
