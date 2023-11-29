import { useAuth } from '../../__hooks/useAuth';
import * as Styled from './styled';
import { useState } from 'react';
import { updateToken } from '../../__redux/authTokenSlice';
import { useAppDispatch } from '../../__hooks/useAppDispatch';

export const LoginPage = () => {
	const dispatch = useAppDispatch();

	const [usernameValue, setUsernameValue] = useState<string>('');
	const [passwordValue, setPasswordValue] = useState<string>('');

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event?.target?.value;
		setUsernameValue(inputValue);
	};

	const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event?.target?.value;
		setPasswordValue(inputValue);
	};

	const handleLogin = async (username: string, password: string) => {
		setIsLoading(true);
		const credentials = { username: username, password: password };
		try {
			const { access_token } = await useAuth(credentials);
			setIsLoading(false);
			if (!access_token) {
				alert('Incorrect password or username. Please try again.');
				return;
			}
			alert('Login successful! You will be redirected to the home page.');
			dispatch(updateToken(access_token));
			window.location.pathname = '/';
		} catch {
			alert('Something went wrong. Please try again later.');
			setIsLoading(false);
		}
	};

	return (
		<Styled.MainContent>
			<Styled.Form>
				<label htmlFor="username">Username</label>
				<Styled.Input
					type="text"
					name="username"
					value={usernameValue}
					onChange={updateUsername}
				/>

				<label htmlFor="password">Password</label>
				<Styled.Input
					type="password"
					name="password"
					value={passwordValue}
					onChange={updatePassword}
				/>
				<Styled.FormButton
					type="button"
					disabled={isLoading}
					onClick={() => handleLogin(usernameValue, passwordValue)}
					$isDisabled={isLoading}
				>
					Login
				</Styled.FormButton>
			</Styled.Form>
		</Styled.MainContent>
	);
};
