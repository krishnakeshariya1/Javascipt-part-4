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