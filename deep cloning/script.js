const obj = {
    name : "krishna",
    age : 20,
}
const obj2 = obj;
obj2.name = "Amit";
// it will pass the refrence of obj into obj2 , IF we change anything in obj2 it will effect obj

const obj3 = {...obj};
obj3.name = "krishna";
// it is a shallow copy 

const nestedObject = {
    name : "krishna",
    age :20,
    social : {
        facebook: {
            acc1 : "somewhere@gamil.com",
            acc2 : "somewhere@gmail.com",
        },
        twitter : {
            free : {
                acc1 : "somewhere@gmail.com"
            },
            paid :{
                acc1 : "somewhere@gmail.com",
            }
        }
    }
}

const dublicate = {...nestedObject};
dublicate.social.facebook.acc1 = "krishnakeshariya@gmail.com";
console.log(nestedObject.social.facebook.acc1);
console.log(dublicate.social.facebook.acc1); // let's check the values 

// it is changing the both object's value bcz shallow copy only work on non-nested object or array..
// nested object ka refrence pass hoga jab ham spread operator or object.assign ka use kerte hai..

let deepCopy = (obj)=>{
    if(typeof(obj !== "obj") || obj === null) return obj;

    let copiedVal = Array.isArray(obj) ? [] : {};
    let keys = Object.keys(obj);

    for(let i =0 ; i <keys.length; i++){
        copiedVal[keys[i]] = deepCopy(obj[keys[i]]);
    }
    return copiedVal;
}
console.log(deepCopy(nestedObject)); // it is a function that deepcopy the nested objects or array...
