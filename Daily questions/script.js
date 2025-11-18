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

const reverseNumber = (num)=>{
    if(num === 0)return 0;

    num = Math.trunc(Number(num));
    let rev = 0;
    while(num > 0){
        let digit = Math.floor(num % 10);
        rev = rev *10 + digit;
        num = Math.floor(num/ 10);
    }
    return rev
}
console.log(reverseNumber(8956))

const anagramCheck = (str1 ,str2)=>{
    if(str1.length !== str2.length) return false

    let freq ={}
    for(let ch of str1){
        freq[ch] = (freq[ch] || 0)+1
    }
    for(let ch of str2){
        if(!freq[ch]) return false
        freq[ch]--;
    }

    return true
}
console.log(anagramCheck("race","care"))

const secondLargest = (arr)=>{
    let max = -Infinity;
    let secondLargest = -Infinity;

    for(let char of arr){
        if(max < char){
            secondLargest = max;
            max = char;
        }
         else if(secondLargest < char && char < max){
            secondLargest = char;
        }
    }
    return {
        max,
        secondLargest
    }
}
console.log(secondLargest([10,5,20,8,20,7,16]));
console.log(secondLargest([-5, -10, -3, -3]));


const removeDublicate=(arr)=>{
    const newArr = [];
    
    for(let char of arr){
        let exist = false;

        for(let val of newArr){
            if(val === char){
                exist = true;
                break;
            }
        }
        if(!exist){
            newArr.push(char)
        }
    }
    return newArr
}
console.log(removeDublicate([5,7,8,10,5,20,8,5]));

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
function countEvenDigits(num){
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

function reverseString(str){
    let rev = "";

    for(let i = str.length-1; i >=0; i--){
        rev+= str[i];
    }
    return rev
}
console.log(reverseString("krishna"));

function countOccurrences(arr , target){
    let count = 0;

    for(let chr of arr){
        if(chr === target) count++;
    }
    return count;
}
console.log(countOccurrences([2,4,5,2,3,5,6,2,9,0,2], 2)) // 4

function findMax(arr){
    if(arr.length === 0) return "Empty array"
    let max = arr[0];

    for(let char of arr){
        if(max < char) max = char;
    }
    return max
}
console.log(findMax([5,6,9,2,0,1]))

function dublicateFind(arr){
    let result = [];

    for(let char of arr){
        let exist = false;
        for(let val of result){
            if(val === char){
                exist = true;
                break;
            }
        }
        if(!exist){
            result.push(char);
        }
    }
    return result
}
console.log(dublicateFind([2,3,4,5,2,4,7,9,0]))

function sumOfNumber(num){
    let sum = 0;
    while(num >0){
        let digit = num%10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum
}
console.log(sumOfNumber(54321))

function isSorted(arr){
    for(let i =0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]) return false
    }
    return true
}
console.log(isSorted([1,2,3,4,6,8,2]))