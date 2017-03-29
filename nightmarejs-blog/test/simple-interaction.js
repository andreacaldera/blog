const Nightmare = require( "nightmare" );
const { assert } = require( "chai" );

const nightmare = new Nightmare({
  show: true,
  typeInterval: 20,
  pollInterval: 50,
});

describe( "Simple test with page interaction", () => {
  before(function *() {
    yield nightmare;
  });

  after(function *() {
    yield nightmare.end();
  });

  it('loads and interacts with a page', () =>
    nightmare
      //.viewport(1000, 800)
      .goto('http://www.guidesmiths.com')
      .wait('.has-slideshow')
      .click('.navbar-toggle')
      .click('.navbar-collapse li:nth-child(5) a')
      .wait('.contact')
  )
});
