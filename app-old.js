//HTTP es un paquete de node que nos permite crear un web server

const http = require('http')

http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'application/json'})

    let salida = {
        nombre: 'Pablo',
        edad: 35,
        url: req.url
    }
   
    res.write(JSON.stringify(salida))
    res.end() //indica que finalizo la respuesta

})
.listen(8080)


console.log('escuchando el puero 8080');