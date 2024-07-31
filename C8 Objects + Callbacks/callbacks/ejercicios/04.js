function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   var sumas=0
   for (let index = 0; index < arrayOfNumbers.length; index++) {
      sumas+=arrayOfNumbers[index];

      
   }
   cb(sumas);
}

module.exports = sumarArray;
