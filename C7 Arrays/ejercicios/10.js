function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if (array[index].length>4) {
      return array[index];
    }
  }
  return undefined;
}

module.exports = obtenerPrimerStringLargo;
