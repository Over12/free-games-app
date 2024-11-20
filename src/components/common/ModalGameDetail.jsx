import PropTypes from "prop-types"

export default function ModalGameDetail({ title, thumbnail, short_description, platform, publisher, developer, onClickDetails }) {
  return(
    <div className="fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-background/80 z-10">
      <div className="w-1/4 h-auto border-2 border-secondary rounded-lg bg-background p-5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <img className="w-full mt-3 mb-2" src={thumbnail} alt={title} />
        <p className="text-text/80 my-3 text-pretty">{short_description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src={"./gamepad-icon.svg"} alt="" />
            <p><span className="font-bold">Plataforma:</span> {platform}</p>
          </div>
          <div className="flex gap-2">
            <img src={"./upload-icon.svg"} alt="" />
            <p><span className="font-bold">Publicador:</span> {publisher}</p>
          </div>
          <div className="flex gap-2">
            <img src={"./user-icon.svg"} alt="" />
            <p><span className="font-bold">Desarrollador:</span> {developer}</p>
          </div>
        </div>
        <button className="bg-accent px-5 py-2 rounded-md hover:bg-accent/60 transition-colors mt-3" onClick={onClickDetails}>Cerrar</button>
      </div>
    </div>
  )
}

ModalGameDetail.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  short_description: PropTypes.string,
  platform: PropTypes.string,
  publisher: PropTypes.string,
  developer: PropTypes.string,
  onClickDetails: PropTypes.func
}
