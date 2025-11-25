const countDigit = (num, target) => {
    if (num === 0 && Number(target) === 0) return 1; // special case when both parameter is  0 .
    num = Math.abs(Math.trunc(Number(num))); // convert num parameter to simple clean number .

    target = Number(target);
    if (Number.isNaN(target) || target < 0 || target > 9) {
        throw new Error("target must be a single digit 0-9");
    }
    let count = 0;
    while (num > 0) {
        if (num % 10 === target) count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(countDigit(5544554545544, 5));

const reverseNumber = (num) => {
    if (num === 0) return 0;

    num = Math.trunc(Number(num));
    let rev = 0;
    while (num > 0) {
        let digit = Math.floor(num % 10);
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    return rev
}
console.log(reverseNumber(8956))

const anagramCheck = (str1, str2) => {
    if (str1.length !== str2.length) return false

    let freq = {}
    for (let ch of str1) {
        freq[ch] = (freq[ch] || 0) + 1
    }
    for (let ch of str2) {
        if (!freq[ch]) return false
        freq[ch]--;
    }

    return true
}
console.log(anagramCheck("race", "care"))

const secondLargest = (arr) => {
    let max = -Infinity;
    let secondLargest = -Infinity;

    for (let char of arr) {
        if (max < char) {
            secondLargest = max;
            max = char;
        }
        else if (secondLargest < char && char < max) {
            secondLargest = char;
        }
    }
    return {
        max,
        secondLargest
    }
}
console.log(secondLargest([10, 5, 20, 8, 20, 7, 16]));
console.log(secondLargest([-5, -10, -3, -3]));


const removeDublicate = (arr) => {
    const newArr = [];

    for (let char of arr) {
        let exist = false;

        for (let val of newArr) {
            if (val === char) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            newArr.push(char)
        }
    }
    return newArr
}
console.log(removeDublicate([5, 7, 8, 10, 5, 20, 8, 5]));

function smallestDigit(num) {
    let smallest = Infinity;

    while (num > 0) {
        let digit = Math.floor(num % 10);

        if (digit < smallest) {
            smallest = digit;
        }

        num = Math.floor(num / 10);
    }

    return smallest;
}

console.log(smallestDigit(49382));

function sumDigits(num) {
    let sum = 0;

    while (num) {
        let digit = Math.floor(num % 10);
        sum += digit;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumDigits(5432));

function isPalindrome(num) {
    let original = num;
    let rev = 0;

    while (num > 0) {
        let digit = Math.floor(num % 10);
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === rev
}

console.log(isPalindrome(90009));

function isPalindrome(num) {
    let original = num;
    let rev = 0;

    while (num > 0) {
        let digit = Math.floor(num % 10);
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === rev;
}

console.log(isPalindrome(90009)); // true
function countEvenDigits(num) {
    let count = 0;

    while (num > 0) {
        let digit = Math.floor(num % 10);
        if (digit % 2 === 0) count++;
        num = Math.floor(num / 10);
    }
    return count;
}

console.log(countEvenDigits(87654321));

function countGreaterThan5(num) {
    let count = 0;

    while (num > 0) {
        let digit = Math.floor(num % 10);
        if (digit > 5) count++;
        num = Math.floor(num / 10);
    }

    return count;
}

function reverseString(str) {
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev
}
console.log(reverseString("krishna"));

function countOccurrences(arr, target) {
    let count = 0;

    for (let chr of arr) {
        if (chr === target) count++;
    }
    return count;
}
console.log(countOccurrences([2, 4, 5, 2, 3, 5, 6, 2, 9, 0, 2], 2)) // 4

function findMax(arr) {
    if (arr.length === 0) return "Empty array"
    let max = arr[0];

    for (let char of arr) {
        if (max < char) max = char;
    }
    return max
}
console.log(findMax([5, 6, 9, 2, 0, 1]))

function dublicateFind(arr) {
    let result = [];

    for (let char of arr) {
        let exist = false;
        for (let val of result) {
            if (val === char) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            result.push(char);
        }
    }
    return result
}
console.log(dublicateFind([2, 3, 4, 5, 2, 4, 7, 9, 0]))

function sumOfNumber(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum
}
console.log(sumOfNumber(54321))

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false
    }
    return true
}
console.log(isSorted([1, 2, 3, 4, 6, 8, 2]))

let arr = [5, 7, 8, 9, 2, 1, 4];
let sum = 0;
for (let char of arr) {
    sum += char;
}
console.log(`The sum of all elements are :- ${sum}`);

function averageofArray(arr) {
    let sum = 0;
    for (let char of arr) {
        sum += char;
    }
    return sum / arr.length;
}
console.log(averageofArray([2, 3, 4, 5, 6, 7]))

function findIndexOfArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return `Index of element ${target} is :- ${i}`
    }
    return "NO match found"
}
console.log(findIndexOfArray([2, 3, 4, 5, 6], 4));

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
        if (longest.length < word.length) {
            longest = word;
        }
    }
    return longest;
}

function capitalizeWords(sentence) {
    const words = sentence.trim().split(" ");
    let result = [];

    for (let word of words) {
        if (word.length === 0) continue;
        result.push(word[0].toUpperCase() + word.slice(1));
    }

    return result.join(" ");
}

console.log(capitalizeWords("krishna  keshariya   sir"));

function mergeArrays(arr1, arr2) {

    if (!Array.isArray(arr1)) throw new Error("input value is not a array");
    if (!Array.isArray(arr2)) throw new Error("input value is not a array");

    let result = [];

    for (let item of arr1) {
        result.push(item);
    }
    for (let item of arr2) {
        result.push(item);
    }
    return result
}
console.log(mergeArrays([2, 3, 4, 5], [6, 7, 8, 9]));

function toStringArray(arr) {
    if (!Array.isArray(arr)) throw new Error("Invalid input : expected an array");

    const result = [];
    for (let item of arr) {
        if (typeof (item) !== "number") throw new Error("Invalid value found: all elements must be numbers")
        result.push(String(item));
    }
    return result;
}
console.log(toStringArray([1, 2, 3, 4, 5, 6]));

function printToN(num) {
    if (typeof num !== "number" || Number.isNaN(num))
        throw new Error("Input must be a valid number");

    if (num < 1) throw new Error("Number must be >= 1");

    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}

// printToN(22);

function printEvenNumbers(num) {
    if (typeof num !== "number" || Number.isNaN(num))
        throw new Error("Input must be a valid number");

    if (!Number.isInteger(num))
        throw new Error("Number must be an integer");

    if (num < 2)
        throw new Error("Number must be at least 2");

    for (let i = 2; i <= num; i += 2) {
        console.log(i);
    }
}

printEvenNumbers(15);


function printOddNumber(num) {

    if (typeof num !== "number" || Number.isNaN(num)) throw new Error("Input should be a valide number");

    if (!Number.isInteger(num)) throw new Error("Number must be an integer");

    if (num < 1) throw new Error("Number must be at least 1 ");

    for (let i = 1; i <= num; i += 2) {
        console.log(i)
    }
}
printOddNumber(2)


function printNumberTable(num) {
    if (typeof num !== "number" || Number.isNaN(num)) throw new Error("Input should be a valide number");

    if (!Number.isInteger(num)) throw new Error("Number must be an integer");

    if (num < 1) throw new Error("Number must be at least 1");

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${i * num}`);
    }

}
printNumberTable(5)

function printSumUptoN(num) {
    if (typeof num !== "number") {
        throw new Error("Input must be a number");
    }

    if (Number.isNaN(num)) {
        throw new Error("Input cannot be NaN");
    }

    if (!Number.isInteger(num)) {
        throw new Error("Number must be an integer");
    }

    if (num < 1) {
        throw new Error("Number must be at least 1");
    }
    const sum = num * (num + 1) / 2;
    return `The sum of numbers from 1 to ${num} is ${sum}`
}

console.log(printSumUptoN(12))

function findFactorial(num) {
    if (typeof num !== "number") {
        throw new Error("Input must be a number");
    }

    if (Number.isNaN(num)) {
        throw new Error("Input cannot be NaN");
    }

    if (!Number.isInteger(num)) {
        throw new Error("Number must be an integer");
    }
    if (num < 0) {
        throw new Error("Factorial is not define for negative numbers");
    }
    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return `The factorial of ${num} is:- ${result}`
}
console.log(findFactorial(5))


function countdigit(number) {
    if (typeof number !== "number") {
        throw new Error("Input must be a nuber");
    }

    if (Number.isNaN(number)) {
        throw new Error("Input can not be NAN");
    }

    if (!Number.isInteger(number)) {
        throw new Error("Number must be an integer");
    }

    number = Math.abs(number);

    if (number === 0) return 1;

    let count = 0;

    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }

    return count;
}
console.log(countdigit(-777));
function printNumber(num) {
    // 1. validation checks
    if (typeof num !== "number") {
        throw new Error("Input must be a nuber");
    }

    if (Number.isNaN(num)) {
        throw new Error("Input can not be NAN");
    }
    if (!Number.isInteger(num)) {
        throw new Error("Number must be an integer");
    }

    num = Math.abs(num);

    // 2. handle single digit
    if (num >= 0 && num <= 9) {
        console.log(num);
        return num;
    }

    // 3. count digits
    let temp = num;
    let digits = 0;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        digits++;
    }

    // 4. print each digit from left -> right
    while (digits > 0) {
        const power = 10 ** (digits - 1);

        const digit = Math.floor(num / power);  // TODO
        console.log(digit);

        num = num % power;  // TODO
        digits--;           // TODO
    }
}
printNumber(12345);

function reverseNumbers(number) {
    if (typeof number !== "number") throw new Error("Input must be a number ");
    if (Number.isNaN(number)) throw new Error("Number can not be NAN");
    if (!Number.isInteger(number)) throw Error("Number must be an integer");
    isNegative = number < 0;
    number = Math.abs(number);
    let rev = 0;
    while (number > 0) {
        let digit = number % 10;
        rev = rev * 10 + digit;
        number = Math.floor(number / 10);
    }
    return isNegative ? -rev : rev;
}
console.log(reverseNumbers(-123456));

function checkPalindrome(number) {
    if (typeof number !== "number") throw new Error("Input must be a number ");
    if (Number.isNaN(number)) throw new Error("Number can not be NAN");
    if (!Number.isInteger(number)) throw Error("Number must be an integer");
    if (number < 0) return false
    if (number >= 0 && number < 10) return true;

    let temp = number;
    let rev = 0
    while (temp > 0) {
        let digit = temp % 10;
        rev = rev * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    if (rev === number) return true;

    return isPalindrome;
}
console.log(checkPalindrome(-121));

function countOccurrence(number, target) {
    if (typeof number !== "number" || typeof target !== "number") throw new Error("Input must be a number ");
    if (Number.isNaN(number) || Number.isNaN(target)) throw new Error("Input can not be NAN");
    if (!Number.isInteger(number) || !Number.isInteger(target)) throw Error("Input must be an integer");
    if (target < 0 || target > 9) throw new Error("Digit must be between 0 and 9");
    if (number === 0 && target === 0) return 1;

    number = Math.abs(number);
    let count = 0;
    while (number > 0) {
        let digit = number % 10;
        if (digit === target) count++;
        number = Math.floor(number / 10);
    }
    return count;
}
console.log(countOccurrence(787787444, 4));

function countEvenOdd(number){
    if(typeof number !== "number") throw new Error("Input must be an Number");
    if(Number.isNaN(number)) throw new Error("Input can not be NAN");
    if(!Number.isInteger(number)) throw Error("Number must be an integer");
    
    number = Math.abs(number);

    if(number === 0) return {even : 1, odd: 0};

    let result = {even : 0, odd: 0};
    
    while(number > 0){
        let digit = number % 10;
        if(digit % 2 === 0) result.even++;
        else result.odd++;

        number = Math.floor(number / 10) ;
    }
    return result;
}
console.log(countEvenOdd(12234567899));