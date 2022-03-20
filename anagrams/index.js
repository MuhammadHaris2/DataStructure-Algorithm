// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
  //sanitize input strings remove "/ etc
  // stringA = stringA.toLowerCase().replace(/[\W_]+/g, " ");
  // stringB = stringB.toLowerCase().replace(/[\W_]+/g, " ");
  // if (stringA.length !== stringB.length) {
  //   return false;
  // }

  // const stringACharCount = {};
  // for (let i = 0; i < stringA.length; i++) {
  //   const aChar = stringA[i];
  //   stringACharCount[aChar] = stringACharCount[aChar] + 1 || 1;
  // }

  // for (let i = 0; i < stringB.length; i++) {
  //   const bChar = stringB[i];
  //   if (!stringACharCount[bChar]) {
  //     return false;
  //   } else {
  //     stringACharCount[bChar]--;
  //   }
  // }
  // return true;

  // second solution
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, " ");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, " ");
  const stringASorted = stringA.split("").sort().join("");
  const stringBSorted = stringB.split("").sort().join("");
  return stringASorted === stringBSorted;
}

mocha.setup("bdd");
const { assert } = chai;

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});

mocha.run();
