const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// Checks settings and calls the generatePassword function
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// For shuffling the generated password https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript

String.prototype.shuffle = function () {
  var a = this.split(''),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join('');
};

// To copy password by clicking the button
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('password copied to clipboard');
});

// Function which returns a password
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  // They have false or true values in them
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    // Returns only true
    (item) => Object.values(item)[0]
  );
  // If nothing checked in the settings return nothing
  if (typesCount === 0) {
    return '';
  }

  // Generate password by getting name and and calling it
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      // Call the function and append to the generatedPassord
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length).shuffle();
  return finalPassword;
}

// An object that keeps random functions
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Gives a random lower-letter from ASCII Table 97-122
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Gives a random upper-letter from ASCII Table 65-90
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Gives a random number from ASCII Table 48-57
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Gives a random symbol from the string
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,"+';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
