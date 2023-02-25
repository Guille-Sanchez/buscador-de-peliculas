
function handleOnSelect ({ e, setSortBy }) {
  setSortBy(() => e.target.value)
}

function SortMovies ({ setSortBy }) {
  return (
    <form>
      <label htmlFor='sortBy'>Ordernar por:</label>
      <select name='sort' id='sortBy' onClick={(e) => handleOnSelect({ e, setSortBy })}>
        <option value=''>Por favor seleccione una opción</option>
        <option value='default'>Default</option>
        <option value='alphabetic'>Alfabetico</option>
        <option value='releaseYear'>Año de lanazamiento</option>
      </select>
    </form>
  )
}

export default SortMovies
