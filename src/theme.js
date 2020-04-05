import React from "react"
import merge from "lodash.merge"
import get from "lodash.get"
import { useColorMode, ThemeProvider } from "theme-ui"

const baseTheme = {
  colors: {
    text: "#f00",
    background: "#fff",
    primary: "#07c",
    modes: {
      dark: {
        text: "#fff",
        background: "#f00",
        primary: "#0cf",
      },
    },
  },
}

const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  })

function Provider(props) {
  const [colorMode] = useColorMode()
  const theme = getTheme(colorMode)
  return <ThemeProvider {...props} theme={theme} />
}

const theme = {
  Provider,
  ...baseTheme,
}

export default theme
