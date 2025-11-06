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
input.addEventListener("input",debounce(function (det){
    console.log(det)
},1000));
// example of debouncing 

