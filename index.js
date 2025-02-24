const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

export { characters, numbers, symbols };

function randomPassword(passwordLength, number, symbol) {
  let password = "",
    i;
  if (number === true && symbol === true) {
    for (i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  } else if (number === false && symbol === false) {
    for (i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      if (
        !numbers.includes(characters[randomIndex]) &&
        !symbols.includes(characters[randomIndex])
      ) {
        password += characters[randomIndex];
      } else {
        i--;
      }
    }
  } else if (number === false) {
    for (i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      if (!numbers.includes(characters[randomIndex])) {
        password += characters[randomIndex];
      } else {
        i--;
      }
    }
  } else if (symbol === false) {
    for (i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      if (!symbols.includes(characters[randomIndex])) {
        password += characters[randomIndex];
      } else {
        i--;
      }
    }
  }

  return password;
}

export { randomPassword };
