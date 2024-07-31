function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tabla = []
  for (i = 0 ; i <= 10 ; i++){
    const multiple = i * 6;
    tabla.push(multiple);
  }
  return tabla
}

module.exports = tablaDelSeis;
