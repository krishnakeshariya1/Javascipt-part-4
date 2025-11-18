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