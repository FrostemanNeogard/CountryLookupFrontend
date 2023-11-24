import { AuthCredentialsType } from "../__types/auth_types"

export const useAuth = async (credentials: AuthCredentialsType) => {
  return await fetch(import.meta.env.VITE_API_URL + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials)
  })
    .then((data) => data.json())
}