function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var elementos=[]
  for (let index = 0; index < array.length; index++) {
    const element = array[index]*index;
    elementos.push(element);
  }
  return elementos;
}

module.exports = multiplicarElementosPorIndice;
