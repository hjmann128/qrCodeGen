const express = require('express');
const qrCode = require('qrcode');
const morgan = require('morgan');

const app = express();
let input = ''

//register view  EJS engire
app.set('view engine', 'ejs');

//morgan middleware for stats
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}))
  

//Listening on Port 3000
app.listen(3000)

//Home Page request

app.get('/', (req, res) => {
  res.render('index')
  console.log(req.body)
} )

app.post('/', (req, res) => {
    input = req.body.inputText
   qrCode.toDataURL(input, function(err, url) {
    res.render('result', {qr: url})
  })

 


  
 
  
});

   