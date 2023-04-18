import { createObjectFromArrays } from './'

import { sizes, TSize } from '@/types'

export const assosiateArrayWithSizes = <T>(arr: T[]): Record<TSize, T> => {
  if (arr.length != sizes.length)
    throw new Error('Длина массива не соответствует длине массива размеров')
  return createObjectFromArrays(sizes, arr)
}
