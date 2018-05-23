// Item   Price   Offer
// A      50      3 for 130
// B      30      2 for 45
// C      20      N/A
// D      15      N/A

const expect = require('expect.js');
const Checkout = require('./checkout.js');

describe('Checkout', () => {
  context('when it receives one A', () => {
    it('returns a total price of 50', () => {
      checkout = new Checkout()
      checkout.scan('A')
      expect(checkout.total()).to.be(50)
    })
  })
})
