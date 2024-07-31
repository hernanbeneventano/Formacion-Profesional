function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var maximo=array[0]
  var posicion=0
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maximo) {
      maximo=array[index];
      posicion = index;
    }
    
  }
  return posicion;
}

module.exports = encontrarIndiceMayor;
