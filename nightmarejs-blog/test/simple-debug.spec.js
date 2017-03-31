const Nightmare = require( "nightmare" );
const { assert } = require( "chai" );

const nightmare = new Nightmare({
  openDevTools: {
    mode: 'detach'
  },
  show: true,
  typeInterval: 20,
  pollInterval: 50,
});

describe( "Simple test with debugging", () => {
  before(function *() {
    yield nightmare;
  });

  after(function *() {
    yield nightmare.end();
  });

  it('loads a page and checks status', () => {
    return nightmare
      .goto('http://www.guidesmiths.com')
      .wait(1000)
      .then((res) => {
        assert.equal(res.code, 200);
      })
  })
});
