/**
* Bodega.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'localDiskDb',
  attributes: {
    nombre:{
      type: 'string'
    },
    direccion:{
      type: 'string'
    },
    capacidadEnToneladas:{
      type: 'integer'
    }
  }
};

