function sumaArray(array1, array2){
if(array1 == undefined || array2 == undefined){
  return "Error";
}else{
  if(array1.length != array2.length){
    return "Error";
  }else{
    var array = [];
    for(i=0; i<array1.length; i++){
      if(isNaN(parseInt(array1[i])) || isNaN(parseInt(array2[i]))){
        return "Error";
      }else{
        array[i] = array1[i] + array2[i];
      }
    }
    return array;
  }
}

}

if(typeof exports !== 'undefined') {
    exports.sumaArray = sumaArray;
}
