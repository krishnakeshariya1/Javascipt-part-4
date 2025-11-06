let input = document.querySelector("input");
function debounce(fnc,delay){
let timer;
return function(...arg){
    clearTimeout(timer);
    timer = setTimeout(()=>{
        fnc(...arg);
    },delay);
};
}
// input.addEventListener("input",debounce(function (det){
//     console.log(det)
// },1000));
// example of debouncing 

//example of throttle

function thorttle(fnc,delay){
    let timer = 0;
    return function(...arg){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...arg);
        }
    };
}
input.addEventListener("input", thorttle(function(details){
    console.log("Hey");
},2000))