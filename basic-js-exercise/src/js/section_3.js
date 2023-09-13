// 1. Create a function to display numbers from 1 to 100.

function displayNumberFrom1to100() {
  for (let i = 1; i <= 100; i++) {
    console.log(`${i}`);
  }
}
displayNumberFrom1to100();

// 2. Create a function to display today's date in DD/MM/YYYY format.
function todayDate() {
  const randomDate = new Date();
  return `${randomDate.getDate()}/${randomDate.getMonth()}/${randomDate.getFullYear()}`;
}

console.log(todayDate());

//3. Create a function which accepts a Celsius value as parameter and returns the Fahrenheit value.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// console.log(celsiusToFahrenheit(45));

//4. Create a function which accepts an array of numbers as parameter and return the average of those numbers.
function averageOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    sum = sum + numbers[i];
    // console.log('sum',sum);
  }
  return sum / numbers.length;
}

const arrayOfNumber = [1, 2, 3, 4];
console.log(averageOfArray(arrayOfNumber));

//5. Create a function to reverse a given string.

function toReverseString(value) {
  return value.split("").reverse().join("");
}

console.log(toReverseString('surmani'));
