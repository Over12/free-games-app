import { API } from '../constants/api'

export async function getGameData() {
  const response = await fetch(API.URL, API.OPTIONS)
  const data = await response.json()

  return data
}
