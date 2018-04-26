const chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('PRODUCT OPERATIONS', () => {
	it('testing on function getAll', (done) => {
		
		chai.request(server)
	    .get('/getAll')
	    .end( (err, res) => {
		     res.should.have.status(200);
		     res.should.be.json;
		     res.body.should.be.a('array');
		     done();
	    });
    });

    it('testing on function getProduct', (done) => {
	    chai.request(server)
		    .post('/getProduct')
		    .send({'code': 'PANTS'})
		    .end(function(err, res){
		     res.should.to.have.status(200);
		     res.should.be.json;
		     res.body[0].should.have.property('code');
		     res.body[0].should.have.property('name');
		     res.body[0].should.have.property('id');
		     res.body[0].code.should.equal('PANTS');
		     res.body[0].name.should.equal('Pants');
		     res.body[0].price.should.equal(5);
		     done();
	    });
	});

	it('testing on function getPurchase', (done) => {
		
		chai.request(server)
	    .get('/getAll')
	    .end( (err, res) => {
		     res.should.have.status(200);
		     res.should.be.string;
		     done();
	    });
    });

});