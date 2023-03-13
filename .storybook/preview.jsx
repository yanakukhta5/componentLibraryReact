import { KubThemeProvider } from '@/KubThemeProvider'

export const decorators = [
  (Story) => (
    <KubThemeProvider>
      <Story />
    </KubThemeProvider>
  )
]
