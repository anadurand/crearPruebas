function convertirGrados(array){

if(array != undefined && Array.isArray(array)){

  var celsius = [];
  for(i=0; i<array.length; i++){
    array[i]=parseFloat(array[i]);
    if(array[i] != undefined && !isNaN(array[i])){
      celsius[i] = ((array[i] - 32) * 5 / 9).toFixed(2);
    }else{ return "Error";}
  }
  return celsius;
}else{
  return "Error";
}
var celsius = fahrenheit -32 *(5/9);
}

if(typeof exports !== 'undefined') {
    exports.convertirGrados = convertirGrados;
}
