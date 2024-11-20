import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export default function FormSearch() {
  const { filterGames } = useContext(AppContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    filterGames({
      category: e.target.category.value,
      platform: e.target.platform.value,
      sort: e.target.short.value
    })

    console.log("Filters: " + e.target.category.value, e.target.platform.value, e.target.short.value)
  }

  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <h2 className="text-center text-4xl font-bold">Encuentra Juegos Gratis en un Click</h2>
      <div className="flex justify-center items-end gap-5 my-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="category">Categoría:</label>
          <select className="px-3 py-2 border border-secondary bg-background rounded-md" name="category" id="category">
            <option value="">Selecciona una categoría</option>
            <option value="MMORPG">MMORPG</option>
            <option value="Shooter">Shooter</option>
            <option value="Strategy">Strategy</option>
            <option value="Action RPG">Action RPG</option>
            <option value="Battle Royale">Battle Royale</option>
            <option value="ARPG">ARPG</option>
            <option value="MMOARPG">MMOARPG</option>
            <option value="Fighting">Fighting</option>
            <option value="MOBA">MOBA</option>
            <option value="Card Game">Card Game</option>
            <option value="Action Game">Action Game</option>
            <option value="Action">Action</option>
            <option value="Sports">Sports</option>
            <option value="MMO">MMO</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="platform">Plataforma:</label>
          <select className="px-3 py-2 border border-secondary bg-background rounded-md" name="platform" id="platform">
            <option value="">Selecciona una plataforma</option>
            <option value="PC (Windows)">PC</option>
            <option value="Web Browser">Web Browser</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="short">Ordenar por:</label>
          <select className="px-3 py-2 border border-secondary bg-background rounded-md" name="hort" id="short">
            <option value="">Sin orden</option>
            <option value="release_date">Año de lanzamiento</option>
            <option value="alphabetical">Alfabéticamente</option>
          </select>
        </div>
        <button className="px-5 py-2 bg-secondary rounded-md" type="submit">Filtrar</button>
      </div>
    </form>
  )
}
