const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers/helpers')

app.use( express.static(__dirname + '/public'))


const port = process.env.PORT || 3000

//Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales')  
app.set('view engine', 'hbs');






 
app.get('/', (req, res)=> {
  
    res.render('home.hbs', {
      nombre:'Pablo Gonzales',
    }) 
})

 
app.get('/about', (req, res)=> {
  
  res.render('about.hbs', {
    nombre: "Pablo Gonzales",
  }) 
})


app.get('/data', (req, res)=> {
    
    res.send('Hola DATA')  
   
  })


 
app.listen(port, ()=>{
    console.log(`escuchando peticiones en el puerto ${port}`);
})