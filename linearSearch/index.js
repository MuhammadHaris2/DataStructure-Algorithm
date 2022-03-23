// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// const foods = ["pizza", "orange", "yogurt"];
// linearSearchIndexOf(foods, "pizza") --> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

//it is best for unsorted array for sorted array we should use binary search

function linearSearchIndexOf(arr, val) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === val) {
  //     return i;
  //   }
  // }
  // return -1;
  return arr.indexOf(val);
}

function linearSearchIncludes(arr, val) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === val) {
  //     return true;
  //   }
  // }
  // return false;
  return arr.includes(val);
}

function linearSearchFind(arr, cb) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (cb(arr[i]) === true) {
  //     return arr[i];
  //   }
  // }
  // return undefined;
  return arr.find(cb);
}

mocha.setup("bdd");
const { assert } = chai;

const foods = ["pizza", "orange", "yogurt"];
const people = [{ name: "Kevin", last: "Nguyen", born: 1995 }];

describe("linearSearchIndexOf()", () => {
  it("returns index of found item", () => {
    assert.equal(linearSearchIndexOf(foods, "pizza"), 0);
    assert.equal(linearSearchIndexOf(foods, "yogurt"), 2);
  });
  it("returns -1 if item not found", () => {
    assert.equal(linearSearchIndexOf(foods, "laptop"), -1);
  });
});

describe("linearSearchIncludes()", () => {
  it("returns true if item found", () => {
    assert.equal(linearSearchIncludes(foods, "pizza"), true);
  });
  it("returns false if item NOT found", () => {
    assert.equal(linearSearchIncludes(foods, "laptop"), false);
  });
});

describe("linearSearchFind()", () => {
  it("returns item back if found", () => {
    const kevin = people[0];
    assert.equal(
      linearSearchFind(people, (person) => person.name === "Kevin"),
      kevin
    );
  });
  it("returns undefined if item NOT found", () => {
    assert.equal(
      linearSearchFind(people, (person) => person.name === "Kevinn"),
      undefined
    );
  });
});

mocha.run();
