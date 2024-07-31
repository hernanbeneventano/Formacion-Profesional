function esNumeroEntero(numero) {
  if (typeof (numero)==="number"){
    if (Math.round(numero)===numero){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }


}


module.exports = esNumeroEntero;