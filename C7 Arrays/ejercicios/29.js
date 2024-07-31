function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  var numero;
  if (numeros.length === 0) {
    return null;
  } 
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] !== index + 1) {
      numero = index + 1;
      return numero;
    }
  
  }
  return null;
}

module.exports = encontrarNumeroFaltante;