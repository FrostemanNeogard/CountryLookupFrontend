import { ThemeProvider } from "styled-components"
import { theme } from "../__util/theme"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as Styled from './styled'
import { HomePage } from "../pages/home_page"
import { Layout } from "../pages/layout"
import { LoginPage } from "../pages/login"

export const App = () => {
  const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="login" element={<LoginPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Styled.App id="App">
        <AppRoutes />
      </Styled.App>
    </ThemeProvider>
  )
}

