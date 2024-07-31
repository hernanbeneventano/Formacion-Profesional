function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var elemento = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] != elemento) {
      return false;
    }  
  }
  return true;
}

module.exports = todosIguales;
