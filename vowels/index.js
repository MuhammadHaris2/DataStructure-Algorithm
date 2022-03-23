// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

function vowels(str) {
  str = str.toLowerCase();
  const vowels = "aeiou".split("");
  const count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    for (let j = 0; j < vowels.length; j++) {
      const vowel = vowels[j];
      if (char === vowel) {
        count++;
      }
    }
  }
  return count;
}

mocha.setup("bdd");
const { assert } = chai;

describe("Vowels", () => {
  it("gets correct vowel count", () => {
    assert.equal(vowels("What"), 1);
    assert.equal(vowels("Why"), 0);
  });
  it("is case insensitive. vowels('aEiOu') should return 5", () => {
    assert.equal(vowels("aEiOu"), 5);
    assert.equal(vowels("I am a world-class developer using iterations"), 16);
  });
});

mocha.run();
