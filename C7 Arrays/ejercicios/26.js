function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var cosa
  for (let index = 1; index < secuencia.length-1; index++) {
    if(n===secuencia[0]){
      cosa=secuencia[0];
      break;
    }
    else if (n % secuencia[index] === 0){
          cosa=secuencia[index];
          break
    }
  }
  return cosa
}

module.exports = encontrarPrimerMultiploDeN;