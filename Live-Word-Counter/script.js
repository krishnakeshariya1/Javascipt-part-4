const textArea = document.querySelector("#textarea");
const wordCount = document.querySelector("#wordCount");
const characterCount = document.querySelector("#characterCount");
const wpm = document.querySelector("#wpm");
const longestWord = document.querySelector("#longestWord");
const shortestWord  = document.querySelector("#shortestWord");

textArea.addEventListener("input" ,()=>{
    const text = textArea.value;
    console.log(text)
})