export const API = {
  'URL': 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  'OPTIONS': {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_GAME_API_KEY,
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  }
}
