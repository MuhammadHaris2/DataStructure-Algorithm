// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

function reverse(str) {
  // one Solution
  // return str.split("").reverse().join("");

  //Alternate solution
  //   let res = "";
  //   for (let i = 0; i < str.length; i++) {
  //     res = str[i] + res;
  //   }
  //   return res;

  // with reduce method
  return str.split("").reduce((pre, next) => {
    return next + pre;
  }, "");
}

mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
  it("reverse() correctly reverses string", () => {
    assert.equal(reverse("ffaa"), "aaff");
    assert.equal(reverse("  aaff"), "ffaa  ");
  });
});

mocha.run();
