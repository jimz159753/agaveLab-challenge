var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

const Sequelize = require('sequelize');
const sequelize = require('./config-sequelize');
/* MODELS */
const model_prod = require('./models/product');
const model_usr = require('./models/user');
const products = model_prod(sequelize);
const users = model_usr(sequelize);
 	
var shop = [];
var count_prod = {};



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());


/* PRODUCT OPERATIONS */
app.get('/getAll', async (req, res) => {
	
	await products.findAll().then(product => {

		return res.json(product)
		
	})	
})

app.post('/getProduct', async (req, res) => {
	
	let code = req.body.code;	

	const product = await products.findAll({ where: { code: code } })

	switch(product[0].code){
		case 'PANTS':
			
			if ('PANTS' in count_prod) {

				count_prod['PANTS'] += 1;
				shop.push(product[0].code);

			} else {

				count_prod['PANTS'] = 1;
				count_prod['PANTS-PRICE'] = product[0].price;
				shop.push(product[0].code);

			}
			
			break;
		case 'TSHIRT':
			
			if ('TSHIRT' in count_prod) {

				count_prod['TSHIRT'] += 1;
				shop.push(product[0].code);

			} else {

				count_prod['TSHIRT'] = 1;
				count_prod['TSHIRT-PRICE'] = product[0].price;
				shop.push(product[0].code);

			}
			
			break;
		case 'HAT':

			if ('HAT' in count_prod) {

				count_prod['HAT'] += 1;
				shop.push(product[0].code);

			} else {

				count_prod['HAT'] = 1;
				count_prod['HAT-PRICE'] = product[0].price;
				shop.push(product[0].code);

			}

			break;
		default:
			console.log('Not found')
	}
	return res.json(product)
		
})

app.get('/getPurchase', (req, res) => {
	var r = 0;
	
	if (count_prod['PANTS']) {
	
		if (count_prod['PANTS'] > 1) {

			r += (Math.floor(count_prod['PANTS'] / 2) * count_prod['PANTS-PRICE']) + count_prod['PANTS-PRICE'];
		
		} else {
			
			r += count_prod['PANTS'] * count_prod['PANTS-PRICE'];
		
		}
	}
	
	if (count_prod['TSHIRT']) {
	
		if (count_prod['TSHIRT'] > 2) {
		
			r += count_prod['TSHIRT'] * 19;
		
		} else {
		
			r += count_prod['TSHIRT'] * count_prod['TSHIRT-PRICE'];
		
		}
	}
	
	if (count_prod['HAT']) {
	
		if (count_prod['HAT']) {
			r += count_prod['HAT'] * count_prod['HAT-PRICE'];
		}
	}
	
	return res.end('Items: '+shop+'\nTotal: $'+String(r))
})

app.get('/getSuccessed', (req, res) => {
	res.end('success')
})

app.get('/getFailed', (req, res) => {
	res.end('failed')
})
/* PASSPORT */
passport.use(new LocalStrategy({
	usernameField: 'name',
	passwordField: 'password'
},
	(username, password, done) => 
	{
		const user = users.findOne({ where :{ name: username }});
    		
      	return done(null, user);
    	
	}
));

passport.serializeUser(function(user, done) {
  done(null, 'serialized!');
});

app.post('/',
  passport.authenticate('local', { failureRedirect: '/getFailed' }),
  (req, res) => {
  	res.redirect('/getSuccessed');
  }
);




var server = app.listen(2000, function(){
	console.log('listening on port', server.address().port);
})

module.exports = server;