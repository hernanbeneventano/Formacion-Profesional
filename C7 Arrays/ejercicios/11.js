function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var temp=[];

  for (let i = 0; i < array.length; i++) {
    const cosa=array[i]*2;
    
    temp.push(cosa);
  }
  return temp;
}

module.exports = duplicarElementos;
