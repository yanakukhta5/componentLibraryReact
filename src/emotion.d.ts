import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      serface: string
      darkest: string
      additional: string
      peripheral: string
      subordinate: string
      backup: string
      lightest: string
      error: string
      success: string
      warning: string
    }
    fonts: {
      primary: string
      secondary: string
    }
  }
}
