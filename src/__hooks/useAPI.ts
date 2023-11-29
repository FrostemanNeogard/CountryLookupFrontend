import { API_URL } from "../config";

export const useAPI = async (endpoint: string, authToken: string) => {
  const API_URL: URL | undefined = getURL(endpoint);

  if (!API_URL) {
    return null;
  }

  const response = await fetch(API_URL, {
    headers: {
      'Authorization': 'Bearer ' + authToken
    }
  })

  const data = await response.json()
  return data;
}

function getURL(endpointName: string) {
  const BASE_API_URL = new URL(API_URL)
  BASE_API_URL.pathname += endpointName;
  return BASE_API_URL
}