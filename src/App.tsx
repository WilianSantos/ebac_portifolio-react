import { useState } from 'react'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'

import { ThemeProvider } from 'styled-components'
import GlobalStyle, { Container } from './styles'
import themeLight from './themes/ligtht'
import themeDark from './themes/dark'

function App() {
  const [isThemeLight, setIsThemeLigtht] = useState(true)
  function handleTheme() {
    setIsThemeLigtht(!isThemeLight)
  }
  return (
    <ThemeProvider theme={isThemeLight ? themeLight : themeDark}>
      <GlobalStyle />
      <Container>
        <Sidebar handleTheme={handleTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
