// .storybook/preview.js

import { ThemeProvider } from "@emotion/react"
import { theme } from '../src/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]