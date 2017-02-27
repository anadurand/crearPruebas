var assert = require('assert');
var Convertir = require('../ejercicio03.js');

describe('Conversion de grados Celsius a Fahrenheit de un array', function(){
    it('should return the array with the new values', function(){
      assert.deepEqual(Convertir.convertirGrados([45,59,10.5]),[7.22,15,-11.94])
      assert.deepEqual(Convertir.convertirGrados([0,"123",32]),[-17.78,50.56,0])

    })

    it('should return an Error if the param is missing', function(){
      assert.equal(Convertir.convertirGrados(),"Error")
    })

    it('should return an Error if the elementes of the array are string or null', function(){
      assert.equal(Convertir.convertirGrados(["a",,2]), "Error")
    })

    it('should return an Error if the param is not an array', function(){
      assert.equal(Convertir.convertirGrados(123),"Error")
      assert.equal(Convertir.convertirGrados("123"),"Error")

    })
})
