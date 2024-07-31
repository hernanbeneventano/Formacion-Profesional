function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var elementos=[]
  for (let index = 0; index < array.length; index++) {
    if (array[index]%2==0) {
      const elemento=array[index];
      elementos.push(elemento);
    }
    
  }
  return elementos;
}

module.exports = filtrarNumerosPares;
