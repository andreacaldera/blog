const Nightmare = require( "nightmare" );
const { assert } = require( "chai" );

const nightmare = new Nightmare({
  show: true,
  typeInterval: 20,
  pollInterval: 50,
});

describe( "Simple test with viewort", () => {
  before(function *() {
    yield nightmare;
  });

  after(function *() {
    yield nightmare.end();
  });

  it('loads a page with custom viewport', () =>
    nightmare
      .viewport(1000, 800)
      .goto('http://www.guidesmiths.com')
      .wait('.has-slideshow')
  )
});
