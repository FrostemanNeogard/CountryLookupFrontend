import { AuthCredentialsType } from "../__types/auth_types"
import { API_URL } from "../config"

export const useAuth = async (credentials: AuthCredentialsType) => {
  return await fetch(API_URL + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials)
  })
    .then((data) => data.json())
}