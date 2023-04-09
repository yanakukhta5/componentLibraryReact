import { FC, memo } from 'react'

import { SearchProps } from './types'
import { Wrapper, Submit, Query } from './style'

export const Search: FC<SearchProps> = memo(function ({
  placeholder,
  value,
  onInputFunc,
  disabled,
  ...props
}) {
  return (
    <Wrapper {...props}>
      <Query
        onInput={onInputFunc}
        type="search"
        placeholder={placeholder}
        value={value}
      />

      <Submit
        disabled={disabled}
        fullwidth={false}
        color="secondary"
        background="primary"
        type="submit"
      ></Submit>
    </Wrapper>
  )
})
