import { FC, ReactNode } from 'react'
import { ThemeProvider } from '@emotion/react'

import { theme as kubTheme } from '@/theme'

interface ThemeProviderProps {
  children: ReactNode
  theme?: object
}

export const KubThemeProvider: FC<ThemeProviderProps> = function ({
  children,
  theme = kubTheme
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
