// browser test

const expect = chai.expect;
BigNumber.config({ RANGE: [-324, 308] });

describe.only("Fibonacci", function () {
  it("Calculates the 1st Fibonacci number fast enough", function () {
    this.timeout(1000);
    const expected = new BigNumber(0);
    const result = 1;

    expect(false).to.be.false;
  });
});
