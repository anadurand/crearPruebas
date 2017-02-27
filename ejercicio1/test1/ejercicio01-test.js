var assert = require('assert');
var Hola = require('../ejercicio01.js');

describe('Saludo', function(){
    it('should return the greeting in the specific languages', function(){
      assert.equal(Hola.saludo("es"),"Hola Mundo!")
    })

    it('should return an Error if the param is missing', function(){
      assert.equal(Hola.saludo(),"Error")
    })

    it('should return the greeting even if the param is UpperCase or LowerCase', function(){
      assert.equal(Hola.saludo("Es"),"Hola Mundo!")
      assert.equal(Hola.saludo("eS"),"Hola Mundo!")
    })

    it('should return an Error if the param is different', function(){
      assert.equal(Hola.saludo("ar"),"Error")
    })
})
