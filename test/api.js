//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('API test', () => {
    
  describe('/ basic endpoint test', () => {
      it('it should have 3 keys: success, version and ip', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('success')
                res.body.should.have.property('version')
                res.body.should.have.property('ip')
                done();
            });
      });
  });



});