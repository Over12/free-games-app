import { useContext } from 'react'
import GameCard from '../common/GameCard'
import { AppContext } from '../../context/AppContext'

export default function CardsContainer() {
  const { games, loading } = useContext(AppContext)

  return(
    <div className='grid grid-flow-row gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 pt-5'>
      {loading && <p className='text-center font-bold text-xl sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>Cargando...</p>}
      {games.length === 0 && !loading ? (
        <p className='text-center font-bold text-xl sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>No se encontraron juegos...</p>
      ) : games.map(game => (
        <GameCard 
          key={game.id}
          title={game.title}
          thumbnail={game.thumbnail}
          short_description={game.short_description}
          genre={game.genre}
          platform={game.platform}
          publisher={game.publisher}
          developer={game.developer}
          release_date={game.release_date}
          freetogame_profile_url={game.freetogame_profile_url}
        />
      ))}
    </div>
  )
}
