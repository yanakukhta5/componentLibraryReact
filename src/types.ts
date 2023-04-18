export const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

const constSizes: readonly string[] = sizes

export const colors = [
  'primary',
  'secondary',
  'tertiary',
  'serface',
  'darkest',
  'additional',
  'peripheral',
  'subordinate',
  'backup',
  'lightest',
  'error',
  'success',
  'warning'
] as const

export type TSize = (typeof constSizes)[number]

export type TColor = (typeof colors)[number]
