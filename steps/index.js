// Write a function that takes a number N.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = "";
    // for (let hash = i; hash > 0; hash--) {
    //   step += "#";
    // }
    // for (let space = n - i; space > 0; space--) {
    //   step += " ";
    // }

    // second solution
    step += "#".repeat(i);
    step += " ".repeat(n - i);
    console.log(step);
  }
}

mocha.setup("bdd");
const { assert } = chai;
console.log = sinon.spy();

describe("Steps", () => {
  it("steps() works", () => {
    steps(3);
    assert.equal(console.log.callCount, 3);
    assert.equal(console.log.getCall(0).args[0], "#  ");
    assert.equal(console.log.getCall(1).args[0], "## ");
    assert.equal(console.log.getCall(2).args[0], "###");
  });
});

mocha.run();
