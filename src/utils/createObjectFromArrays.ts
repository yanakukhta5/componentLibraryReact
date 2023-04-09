export const createObjectFromArrays = function <T extends string, U>(
  arr1: Array<T>,
  arr2: Array<U>
): Record<T, U> {
  if (arr1.length !== arr2.length)
    throw new Error('У массивов разная размерность')
  const result = {} as Record<T, U>
  arr1.forEach((item1, i) => (result[item1] = arr2[i]))
  return result
}