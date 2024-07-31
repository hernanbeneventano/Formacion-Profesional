function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var numeross=[];
  for (let index = 0; index < numeros.length; index++) {
   
    if (numeross.includes(numeros[index])) {
      return numeros[index];
    }
    numeross.push(numeros[index]);
  }
}

module.exports = encontrarElementoRepetido;