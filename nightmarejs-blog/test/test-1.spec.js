const Nightmare = require( "nightmare" );
const { assert } = require( "chai" );

const nightmare = new Nightmare({
  show: true,
  typeInterval: 20,
  pollInterval: 50,
});

describe( "test 1", () => {
  before(function *() {
    yield nightmare;
  });

  after(function *() {
    yield nightmare.end();
  });

  it('loads a page and checks status code with callback', (done) => {
    nightmare.goto('http://google.com')
      .then((res) => {
        assert.equal(res.code, 200);
        done();
      });
  });

  it('loads a page and checks status code with promise', function *() {
    yield nightmare
      .goto('http://google.com')
      .then((res) => {
        assert.equal(res.code, 200);
        done();
      })
      .end();
  })
});
