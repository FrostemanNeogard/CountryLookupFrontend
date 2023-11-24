import { CountryInput } from "../../components/country_input";
import { CountryList } from "../../components/country_list";
import { SekInput } from "../../components/sek_input";
import * as Styled from './styled';

export const HomePage = () => {

  const InputsForm = () => {
    return (
      <Styled.InputFields>
        <div>
          <label htmlFor="sek-input">SEK</label>
          <SekInput name="sek-input" />
        </div>

        <div>
          <label htmlFor="country-input">Country</label>
          <CountryInput name="country-input" />
        </div>
      </Styled.InputFields>
    )
  }

  return (
    <Styled.MainContent>
      <InputsForm />
      <CountryList />
    </Styled.MainContent>
  )
}

