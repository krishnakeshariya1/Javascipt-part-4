// map -> ek array ke top per chlta hai , and us array ke sare member us map function ke ander aate hai or fir map new array return kerta hai..
const arr = [1,2,4,5];
function myMap(arr,callback) {
    let newArray = [];
    for(let i =0; i<arr.length; i++){
        newArray.push(callback(arr[i], i ,arr))
    }
    return newArray;
}
let m1 = myMap(arr,function(val){
    return val **2;
});

// we make our own methods..[map,filter];

// setInterveal ,setTimeout, alert ,prompt  they are not the part of js they are web apis

