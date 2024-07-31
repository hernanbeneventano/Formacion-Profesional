function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sumas=0
  for (let index = 0; index < arrayOfNums.length; index++) {
    sumas=sumas+arrayOfNums[index];
    
  }
  return sumas;
}

module.exports = agregarNumeros;
