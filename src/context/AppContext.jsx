import { createContext, useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { getGameData } from '../utils/gameData'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true)
        const data = await getGameData()
        setData(data)
        setGames(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  const filterGames = ({ category, platform, sort }) => {
    let filteredGames = [...data]

    if (category) {
      filteredGames = filteredGames.filter(game => game.genre === category)
    }

    if (platform) {
      filteredGames = filteredGames.filter(game => game.platform === platform)
    }

    if (sort) {
      filteredGames = filteredGames.sort((a, b) => {
        if (sort === 'release_date') {
          return new Date(a.release_date) - new Date(b.release_date)
        }

        if (sort === 'alphabetical') {
          return a.title.localeCompare(b.title)
        }
      })
    }

    setGames([...filteredGames])
  }

  const value = useMemo(() => ({ games, filterGames, loading }), [games, loading])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }

AppProvider.propTypes = {
  children: PropTypes.node
}