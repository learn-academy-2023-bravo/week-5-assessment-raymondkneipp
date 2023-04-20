// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe('encrypt', () => {
  const secretCodeWord1 = 'Lackadaisical'
  // Expected output: "L4ck4d41s1c4l"
  const secretCodeWord2 = 'Gobbledygook'
  // Expected output: "G0bbl3dyg00k"
  const secretCodeWord3 = 'Eccentric'
  // Expected output: "3cc3ntr1c"

  it('returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', () => {
    expect(encrypt(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
    expect(encrypt(secretCodeWord2)).toEqual('G0bbl3dyg00k')
    expect(encrypt(secretCodeWord3)).toEqual('3cc3ntr1c')
  })
})

// b) Create the function that makes the test pass.

/*
Create a function that takes a string as a parameter
Chain the replace method and use regular expressions to match a vowel and replace with corresponding number
Use i and g in the regex to make it case insensitive and match all occurences
*/

const encrypt = (str) => {
  return str
    .replace(/a/gi, '4')
    .replace(/e/gi, '3')
    .replace(/i/gi, '1')
    .replace(/o/gi, '0')
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('includesLetter', () => {
  const letterA = 'a'
  // Expected output: ["Mango", "Apricot", "Peach"]
  const letterE = 'e'
  // Expected output: ["Cherry", "Blueberry", "Peach"]

  const fruitArray = [
    'Mango',
    'Cherry',
    'Apricot',
    'Blueberry',
    'Peach',
    'Kiwi',
  ]

  it('returns an array of all the words containing that particular letter.', () => {
    expect(includesLetter(fruitArray, letterA)).toEqual([
      'Mango',
      'Apricot',
      'Peach',
    ])
    expect(includesLetter(fruitArray, letterE)).toEqual([
      'Cherry',
      'Blueberry',
      'Peach',
    ])
  })
})

// b) Create the function that makes the test pass.

// Create a function that takes an array and a letter.
// Use the filter method on the array to create a new array that contains only the items that include the given letter (ignoring case).
// Return the new array.

const includesLetter = (array, letter) => {
  return array.filter((item) =>
    item.toLowerCase().includes(letter.toLowerCase())
  )
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('isFullHouse', () => {
  const hand1 = [5, 5, 5, 3, 3]
  // Expected output: true
  const hand2 = [5, 5, 3, 3, 4]
  // Expected output: false
  const hand3 = [5, 5, 5, 5, 4]
  // Expected output: false
  const hand4 = [7, 2, 7, 2, 7]
  // Expected output: true

  it('determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.', () => {
    expect(isFullHouse(hand1)).toEqual(true)
    expect(isFullHouse(hand2)).toEqual(false)
    expect(isFullHouse(hand3)).toEqual(false)
    expect(isFullHouse(hand4)).toEqual(true)
  })
})

// b) Create the function that makes the test pass.

const isFullHouse = (hand_arr) => {
  const counts = {}

  hand_arr.forEach((value) => {
    counts[value] = counts[value] ? counts[value] += 1 : 1
  })

  return Object.values(counts).every(item => [2, 3].indexOf(item) > -1)
}
