import { css } from '@emotion/react'
import { EColor } from '@/shared/tokens/colors'

const primary = css`
  background-color: ${EColor.primary};
  color: ${EColor.lightest};
  &:focus-visible {
    outline: 3px solid ${EColor.primary}70;
  }
`

const secondary = css`
  background-color: ${EColor.lightest};
  color: ${EColor.darkest};
  outline: 2px solid ${EColor.peripheral};
  outline-offset: -2px;

  &:focus-visible {
    outline: 3px solid ${EColor.darkest}70;
  }

  &:disabled {
    color: ${EColor.darkest};
  }
`

const success = css`
  background-color: ${EColor.success};
  color: ${EColor.darkest};
  &:focus-visible {
    outline: 3px solid ${EColor.success}70;
  }
`

const error = css`
  background-color: ${EColor.error};
  color: ${EColor.lightest};

  &:focus-visible {
    outline: 3px solid ${EColor.error}70;
  }
`

const warning = css`
  background-color: ${EColor.warning};
  color: ${EColor.darkest};

  &:focus-visible {
    outline: 3px solid ${EColor.warning}70;
  }
`

const disabled = css`
  background-color: ${EColor.peripheral}40;
  color: ${EColor.peripheral};
  cursor: not-allowed;
  outline: none;
  transform: initial;

  &:focus-visible {
    outline: 3px solid ${EColor.peripheral}70;
  }
`

const text = css`
  border: 0px;
  background: transparent;

  &:focus-visible {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
    transform: initial;
  }
`

export const styles = {
  primary,
  secondary,
  success,
  error,
  warning,
  disabled,
  text
}
