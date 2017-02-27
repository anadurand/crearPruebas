var assert = require('assert');
var Suma = require('../ejercicio02.js');

describe('Suma de dos Array', function(){
    it('should return the array with the sum of each index', function(){
      assert.deepEqual(Suma.sumaArray([0,1,2],[3,4,5]),[3,5,7])
    })

    it('should return an Error if one of the param is missing', function(){
      assert.equal(Suma.sumaArray([0,1]),"Error")
      assert.equal(Suma.sumaArray(),"Error")
    })

    it('should return an Error if one of the param length is different', function(){
      assert.equal(Suma.sumaArray([0,1,2],[0,2]),"Error")
    })

    it('should return an Error if the elementes of the array are string', function(){
      assert.equal(Suma.sumaArray([0,"a",4],[0,2,3]), "Error")
    })

    it('should return an Error if the param is not an array', function(){
      assert.equal(Suma.sumaArray(123,[2,4]),"Error")
    })
})
