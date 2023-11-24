import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content auto min-content;
`

export const Header = styled.header`
  padding: 1em;
  text-align: center;
  background-color: ${({ theme }) => theme.primaryDarkened};
  display: grid;
  gap: 6px;

  h1 {
    font-size: 2.5em;
  }
`

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.primaryDarkened};
  text-align: center;
  padding: 1em 20vmin;

  h1 {
    color: blue;
  }
`