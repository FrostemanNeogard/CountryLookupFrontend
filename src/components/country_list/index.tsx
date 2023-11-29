import { CountryType } from '../../__types/country_type';
import { VerticalDivider } from '../vertical_divider';
import * as Styled from './styled';
import { useAppSelector } from '../../__hooks/useAppSelector';
import { useAppDispatch } from '../../__hooks/useAppDispatch';
import { updateCountries } from '../../__redux/countriesSlice';

export const CountryList = () => {
	const countryData = useAppSelector((state) => state.countries.countries);
	const sekValue = useAppSelector((state) => state.sek.value);
	const dispatch = useAppDispatch();

	const Country = (props: { country: CountryType; index: number }) => {
		const { country, index } = props;

		function removeCountry(indexToRemove: number) {
			const removedCountry = countryData[indexToRemove];
			const newCountries = countryData.filter(
				(item) => item !== removedCountry,
			);
			dispatch(updateCountries(newCountries));
		}

		const { flagSrc, name, shortName, population, currencies } = country;

		return (
			<Styled.Country>
				<img src={flagSrc} alt={`${shortName}`} />
				<h1>
					{name} (Population: {population.toLocaleString()})
				</h1>
				<VerticalDivider />
				<Styled.CurrencyBox>
					{currencies.map((currency, index) => {
						return (
							<h1 key={index}>
								{currency.name}:{' '}
								{calculateCurrency(sekValue, currency.conversionRate)}
							</h1>
						);
					})}
				</Styled.CurrencyBox>
				<Styled.RemoveButton onClick={() => removeCountry(index)}>
					X
				</Styled.RemoveButton>
			</Styled.Country>
		);
	};

	function calculateCurrency(sek: number, conversionRate: number): number {
		const currencyAmount = sek * conversionRate;
		return +currencyAmount.toFixed(3);
	}

	if (countryData?.length <= 0) {
		return (
			<Styled.CountryList>
				<Styled.Country>
					<h1>Use the input field above to add countries!</h1>
				</Styled.Country>
			</Styled.CountryList>
		);
	}

	return (
		<Styled.CountryList>
			{countryData?.map((country, index) => {
				return <Country country={country} index={index} key={index} />;
			})}
		</Styled.CountryList>
	);
};
