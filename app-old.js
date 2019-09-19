const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Ander',
        apellido: 'Rivero',
        edad: 28,
        url: request.url
    };
    //response.write(salida);
    //    response.write('Hola Mundo');
    response.end(JSON.stringify(salida));
}).listen(8080);
console.log('Escuchando el puesto 8080');