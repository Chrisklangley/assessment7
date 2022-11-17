const array = [1, 0, 11, 2, -1, -4];

const addToZero = (x) => {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (i !== j) {
        if (x[i] + x[j] === 0) {
          return true;
        }
      }
    }
  }

  return false;
};

// time: O(n^2)
// space: 0(1)

const hasUniqueCharacters = (word) => {
  word.split("");
  let uniqueChar = [];
  for (let i = 0; i < word.length; i++) {
    if (uniqueChar.includes(word[i])) {
      return false;
    } else {
      uniqueChar.push(word[i]);
    }
  }
  return true;
};
// time: O(n)
// space: 0(1)

const words = ["i", "cant", "believe", "its", "not", "butter"];
function findLongestWord(word) {
  let longest = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longest.length) longest = word[i];
  }
  return longest;
}
console.log(findLongestWord(words));

// time: O(n)
// space: 0(1)

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const isPangram = (array, target) => {
  let array2 = target.toLowerCase().split("").sort();
  array2 = array2.filter(function (entry) {
    return entry.trim() != "";
  });
  array2 = [...new Set(array2)];
  console.log(array2, array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array[i] === array2[j]) {
        return true;
      }
    }
    return false;
  }
};
console.log(
  isPangram(alphabetArray, "The quick brown fox jumps over the lazy dog")
);
// time: O(n)
// space: 0(1)
