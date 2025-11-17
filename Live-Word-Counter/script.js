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
    let word = 0
    const trimmedText = text.trim();
    if(trimmedText !== ""){
        word = trimmedText.split(/\s+/).length;
    }
    wordCount.textContent = word;

    //calculate WPM
    const seconds = (word /200)*60;
    wpm.textContent = (seconds <60)? seconds.toFixed(1) +"sec " : (seconds/60).toFixed(2)+ "min";
})