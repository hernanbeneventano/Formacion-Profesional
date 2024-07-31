function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var temp=[];

  for (let index = 0; index < array.length; index++) {
    const cosa = array[index].toUpperCase();
    temp.push(cosa);
    
  }
  return temp;
}

module.exports = convertirStringAMayusculas;
