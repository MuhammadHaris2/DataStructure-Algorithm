// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

function caesarCipher(str, shift) {
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char);
    if (idx === -1) {
      res += char;
      continue; //its mean donot go further in this loop move on next iteration
    }
    const encodedIdx = (idx + shift) % 26; //because we have 26 character so if encode is 26 it retrun 0 26%26 =0 27%26=1 and so on
    // if(encodedIdx > 25){
    //   encodedIdx -=26
    // }
    res += alphabetArr[encodedIdx];
  }
  return res;
}

mocha.setup("bdd");
const { assert } = chai;

describe("caesarCipher()", () => {
  it("shifts letters correctly.", () => {
    assert.equal(caesarCipher("abcd", 1), "bcde");
    assert.equal(caesarCipher("yz", 1), "za");
    assert.equal(caesarCipher("abcd", 100), "wxyz");
  });
  it("does not shift digits or other characters such as '!'.", () => {
    assert.equal(caesarCipher("gurer ner 9 qbtf!", 13), "there are 9 dogs!");
  });
});

mocha.run();
