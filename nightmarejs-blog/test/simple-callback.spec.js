const Nightmare = require( "nightmare" );
const { assert } = require( "chai" );

const nightmare = new Nightmare({
  show: true,
  typeInterval: 20,
  pollInterval: 50,
});

describe( "Simple test with callback", () => {
  it('loads a page and checks status code', (done) => {
    nightmare
      .goto('http://guidesmiths.com')
      .then((res) => {
        assert.equal(res.code, 200);
        done();
      })
  });
});
