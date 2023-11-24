import styled from 'styled-components'

export const MainContent = styled.main`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding: 2em 0;

  display: flex;
  flex-direction: column;
  gap: 1em 0;
`

export const InputFields = styled.form`
  display: grid;
  gap: 1em;

  div {
    display: grid;
    gap: 0.25em 0.75em;
    grid-template-columns: 3fr 1fr;

    label {
      grid-column: 1/-1;
    }
  }

  input {
    height: 2em;
  }
`