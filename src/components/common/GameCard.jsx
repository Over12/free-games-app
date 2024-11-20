import PropTypes from "prop-types"
import { useState } from "react"
import ModalGameDetail from "./ModalGameDetail"

export default function GameCard({ title, thumbnail, short_description, genre, platform, publisher, developer, release_date, freetogame_profile_url }) {
  const [showModal, setShowModal] = useState(false)
  
  const onClickDetails = (e) => {
    e.preventDefault()
    setShowModal(!showModal)
  }

  return(
    <>
      <div className="size-full border-2 border-accent rounded-md p-3 bg-secondary/20 backdrop-blur-md">
        <h3 className="font-bold text-xl">{title}</h3>
        <img className="w-full mt-3 mb-2" loading="lazy" src={thumbnail} alt={title} />
        <div className="flex items-center justify-between my-2 text-text/80">
          <p>Género: {genre}</p>
          <div className="flex items-center">
            <img className="size-5 inline-block" src="./calendar-icon.svg" alt="Steam" />
            <p className="text-text/80 inline-block ml-1 text-sm">{release_date}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-secondary px-3 py-2 rounded-md hover:bg-secondary/60 transition-colors" onClick={onClickDetails}>Más detalles</button>
          <a className="bg-accent px-3 py-2 rounded-md hover:bg-accent/60 transition-colors" href={freetogame_profile_url} target="_blank">Juégalo ya</a>
        </div>
      </div>
      {showModal && <ModalGameDetail title={title} thumbnail={thumbnail} short_description={short_description} platform={platform} publisher={publisher} developer={developer} onClickDetails={onClickDetails} />}
    </>
  )
}

GameCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  short_description: PropTypes.string,
  genre: PropTypes.string,
  platform: PropTypes.string,
  publisher: PropTypes.string,
  developer: PropTypes.string,
  release_date: PropTypes.string,
  freetogame_profile_url: PropTypes.string
}
