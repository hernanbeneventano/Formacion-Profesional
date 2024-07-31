function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if (array.length>0) {
      return array[Math.floor(Math.random()*array.length)];
   } else {
      return undefined
   }
}

module.exports = obtenerElementoAleatorio;
