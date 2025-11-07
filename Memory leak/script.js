let count =0;
const int = setInterval(()=>{
    if(count < 10){
        count++;
        console.log(count)
    }
    else{
        clearInterval(int);
    }
},500) // it will run even after the condition flase

// so it is important to clear the interval