import { useColorMode } from "theme-ui"
import { useEffect } from "react"

function Layout({ mode, children }) {
  const [colorMode, setColorMode] = useColorMode()

  useEffect(() => {
    console.log(colorMode)
    setColorMode(mode)
  }, [mode, colorMode, setColorMode])

  return children
}

export default Layout
