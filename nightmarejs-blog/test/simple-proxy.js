const Nightmare = require( "nightmare" );
const { assert } = require( "chai" );

const nightmare = Nightmare({
    switches: {
        'proxy-pac-url': 'http://your-pac-url',
    },
    webPreferences: {
      partition: 'your-custom-partition',
    },
    show: true,
});

describe( "Simple page through proxy", () => {
  before(function *() {
    yield nightmare;
  });

  after(function *() {
    yield nightmare.end();
  });

  it('loads a page and checks status code', function *() {
    yield nightmare
      .goto('http://google.com')
      .then((res) => {
        assert.equal(res.code, 200);
        done();
      })
      .end();
  });
});
