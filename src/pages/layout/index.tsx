import { Outlet } from "react-router-dom"
import * as Styled from './styled'

export const Layout = () => {
  const NavButton = () => {
    const isHomePage: boolean = location.pathname === "/"
    return (
      <>
        {isHomePage ? (
          <h2>
            <a href="/login">Login</a>
          </h2>
        ) : (
          <h2>
            <a href="/">Home</a>
          </h2>
        )
        }
      </>
    )
  }

  const Header = () => {
    return (
      <Styled.Header>
        <h1>Liam's Country Lookup</h1>
        <NavButton />
      </Styled.Header>
    )
  }

  const Footer = () => {
    return (
      <Styled.Footer>
        <p>
          Project made by <a rel="noreferrer" href="https://github.com/FrostemanNeogard" target="__blank">Liam Frosteman Neogard</a> as part of a tech assignment.
        </p>
      </Styled.Footer>
    )
  }

  return (
    <Styled.Layout>
      <Header />
      <Outlet />
      <Footer />
    </Styled.Layout>
  )
}