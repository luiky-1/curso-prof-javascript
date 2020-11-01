const request = require('request');

request('http://google.com', function(){
  console.log('TERMINO EL PROCESO');
  })

console.log('voy despues');
