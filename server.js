const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.set('view engine', 'ejs');
var path = require('path')
app.set('views', path.join(__dirname, '/public'));
app.use(bodyParser.urlencoded({extended: true}));
var path = require('path')
app.use('/static',express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.render('index.ejs');
})

app.listen('4200',function(){
	console.log("listening in 4200");
})