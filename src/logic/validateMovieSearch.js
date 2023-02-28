export function validateMovieSearch ({ newQuery }) {
  const errors = {
    vacio: 'No se puede iniciar la busqueda con espacio',
    minLetras: 'No se puede buscar una pelicula con menos de tres letras'
  }
  let error = ''

  if (newQuery === ' ') {
    error = errors.vacio
  } else if (newQuery.length < 3) {
    error = errors.minLetras
  } else {
    error = ''
  }
  return error
}
