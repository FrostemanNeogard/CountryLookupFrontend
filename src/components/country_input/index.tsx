import { useAPI } from '../../__hooks/useAPI';
import { useAppDispatch } from '../../__hooks/useAppDispatch';
import { useAppSelector } from '../../__hooks/useAppSelector';
import { updateCountries } from '../../__redux/countriesSlice';
import { CountryType } from '../../__types/country_type';
import * as Styled from './styled';
import { useState } from 'react';

export const CountryInput = (props: { name?: string }) => {
  const authToken = useAppSelector((state) => state.authToken.value)
  const countries = useAppSelector((state) => state.countries.countries)
  const dispatch = useAppDispatch();

  const { name } = props;

  // Country input value
  const [countryValue, setCountryValue] = useState<string>('');

  async function addCountry(countryName: string) {
    if (countryName === '') {
      return;
    }

    const { statusCode, countryData } = await useAPI(`country/${countryName}`, authToken)

    if (statusCode === 401) {
      alert(`An error has occurred. Please make sure you are logged in and try again.`);
      return;
    }

    if (statusCode === 400 || !countryData || countryData.length <= 0) {
      alert(`No data was found when searching for ${countryName}. Please check for any typos and try again.`);
      return;
    }

    // Create new country object
    const { name, currencies, flagSrc, shortName, population } = countryData
    const newCountry: CountryType = {
      name: name,
      shortName: shortName,
      currencies: currencies,
      currencyConversionRate: currencies[0].conversionRate,
      population: population,
      flagSrc: flagSrc,
    }

    // Clear country input
    setCountryValue('')

    // Update country list
    const newCountries: CountryType[] = [...countries, newCountry]
    dispatch(updateCountries(newCountries))
  }

  // Update countryValue state on change event in the country input box
  function handleCountryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event?.target?.value
    setCountryValue(inputValue)
  }

  return (
    <>
      <Styled.CountryInput
        id={name ?? ''}
        type="text"
        autoComplete='off'
        onChange={handleCountryChange}
        value={countryValue}
      />
      <Styled.CountryAddButton type="button" onClick={() => addCountry(countryValue)}>
        Add Country
      </Styled.CountryAddButton>
    </>
  )
}