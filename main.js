import { randomPassword } from "./index.js";

const log = (...args) => console.log(...args);

const passwordLength = document.getElementById("length");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("number");
const display = document.getElementById("display").children;
const form = document.getElementById("form");

let randomPasswords = [];

// generate password
function generatePassword() {
  randomPasswords = [
    randomPassword(passwordLength.value, numbers.checked, symbols.checked),
    randomPassword(passwordLength.value, numbers.checked, symbols.checked),
  ];
}

// display password
function displayPassword(event) {
  event.preventDefault();
  generatePassword();
  display[0].textContent = randomPasswords[0];
  display[1].textContent = randomPasswords[1];
}

form.addEventListener("submit", displayPassword);

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

password1.addEventListener("click", () => {
  navigator.clipboard.writeText(randomPasswords[0]);
  password1.textContent = "Copied!";
});

password2.addEventListener("click", () => {
  navigator.clipboard.writeText(randomPasswords[1]);
  password2.textContent = "Copied!";
});
