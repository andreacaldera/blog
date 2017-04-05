const Nightmare = require( "nightmare" );
const { assert } = require( "chai" );

const nightmare = new Nightmare({
  show: true,
  typeInterval: 20,
  pollInterval: 50,
});

describe( "Simple test with promise", () => {
  before(function *() {
    yield nightmare;
  });

  after(function *() {
    yield nightmare.end();
  });

  it('loads a page and checks status', () =>
    nightmare
      .goto('http://www.guidesmiths.com')
      .then((res) => {
        assert.equal(res.code, 200);
      })
  )
});
