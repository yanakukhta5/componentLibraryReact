import { BaseProps } from '@/shared/types'

enum EButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  error = 'error',
  warning = 'warning',
  text = 'text'
}

export const ButtonVariants = Object.keys(EButtonVariant)
type ButtonVariant = keyof typeof EButtonVariant

export type ButtonProps = BaseProps & React.HTMLAttributes<HTMLButtonElement> & Partial<{
  fullwidth: boolean
  variant: ButtonVariant
  disabled: boolean
}>
