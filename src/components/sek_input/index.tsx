import { useAppDispatch } from '../../__hooks/useAppDispatch';
import { useAppSelector } from '../../__hooks/useAppSelector';
import { updateSek } from '../../__redux/sekSlice';
import * as Styled from './styled';
import { useState } from 'react';

export const SekInput = (props: { name?: string }) => {
	const sekValue = useAppSelector((state) => state.sek.value);
	const dispatch = useAppDispatch();

	const { name } = props;

	const [newSekValue, setNewSekValue] = useState<number | ''>(sekValue);

	function handleSekChange(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const inputValue = event?.target?.value;

		const numbersOnlyRegex = /^[0-9\b]+$/;
		const isValueNumber = numbersOnlyRegex.test(inputValue);

		if (!isValueNumber) {
			setNewSekValue('');
			return;
		}

		const inputValueAsNumber: number = +inputValue;
		setNewSekValue(inputValueAsNumber);
	}

	return (
		<>
			<Styled.SekInput
				id={name ?? ''}
				type="text"
				onChange={handleSekChange}
				value={newSekValue}
				autoComplete="off"
			/>
			<Styled.SekApplyButton
				type="button"
				onClick={() => dispatch(updateSek(newSekValue))}
			>
				Apply
			</Styled.SekApplyButton>
		</>
	);
};
