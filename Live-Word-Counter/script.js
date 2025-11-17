const textArea = document.querySelector("#textarea");
const wordCount = document.querySelector("#wordCount");
const characterCount = document.querySelector("#characterCount");
const wpm = document.querySelector("#wpm");
const longestWord = document.querySelector("#longestWord");
const shortestWord  = document.querySelector("#shortestWord");

textArea.addEventListener("input" ,()=>{
    const text = textArea.value;
    //count character including spaces
    characterCount.textContent = text.length;

    // count words 
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/);
    wordCount.textContent = (trimmedText === "") ? 0 :words.length;  

    //calculate WPM
})