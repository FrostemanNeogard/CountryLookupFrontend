import styled from 'styled-components'

export const CountryList = styled.section`
  display: grid;
  gap: 1em;

  p {
    color: blue;
  }
`

export const Country = styled.article`
  background-color: ${({ theme }) => theme.secondary};
  padding: 0.5em;
  border: ${({ theme }) => theme.borders.primaryBorder};
  border-radius: ${({ theme }) => theme.borders.primaryRadius};
  display: flex;
  word-break: keep-all;
  gap: 0.5em;
  font-size: 130%;

  img {
    height: 1em;
  }

  h1 {
    margin-right: auto;
  }
`

export const CurrencyBox = styled.div`

`

export const RemoveButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borders.primaryRadius};

  background-color: red;
  color: black;
`