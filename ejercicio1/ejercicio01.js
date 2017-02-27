function saludo(idiom){
if(idiom != undefined){
idiom = idiom.toLowerCase();
switch (idiom) {
  case "es": return "Hola Mundo!";
    break;
  case "en": return "Hello World!";
    break;
  case "de": return "Hallo Welt!";
    break;
  default: return "Error";
    
}

}else{ return "Error";}

}

if(typeof exports !== 'undefined') {
    exports.saludo = saludo;
}
