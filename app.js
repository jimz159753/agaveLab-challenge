var express = require('express'),
	app = express(),
	bodyParser = require('body-parser')

const Sequelize = require('sequelize');
const sequelize = new Sequelize('store', 'postgres', '12345678', {
  dialect: 'postgres'
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var shop = [];

const products = sequelize.define('products', {
  code: Sequelize.STRING,
  name: Sequelize.STRING,
  price: Sequelize.STRING

},{
  timestamps: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.get('/getAll', function (req, res) {
	
	products.findAll().then(product => {
		return res.json(product)
		})	
})

app.post('/getProduct', function (req, res) {
	
	let code = req.body.code;
	shop.push(code)
	
	products.findAll({ where: { code: code } }).then(product => {
		return res.json(product)
		})
	
	console.log(shop)
	
})

sequelize
	.sync()
	.then(start);

function start(){
	var server = app.listen(3000, function(){
		console.log('listening on port', server.address().port);
	})
}