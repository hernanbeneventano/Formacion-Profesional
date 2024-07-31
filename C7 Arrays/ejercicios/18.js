function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sumas=0
  for (let index = 0; index < resultadosTest.length; index++) {
    sumas = sumas+resultadosTest[index];
    
  }
  return sumas/resultadosTest.length;
}

module.exports = promedioResultadosTest;
