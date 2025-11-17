const textArea = document.querySelector("#textarea");
const wordCount = document.querySelector("#wordCount");
const characterCount = document.querySelector("#characterCount");
const wpm = document.querySelector("#wpm");
const longestWord = document.querySelector("#longestword");
const shortestWord = document.querySelector("#shortestWord");

textArea.addEventListener("input", () => {
    const text = textArea.value;
    //count character including spaces
    characterCount.textContent = text.length;

    // count words 
    let word = [];
    const trimmedText = text.trim();
    if (trimmedText !== "") {
        word = trimmedText.split(/\s+/);
    }
    wordCount.textContent = word.length;

    //calculate WPM
    const seconds = (word.length / 200) * 60;
    wpm.textContent = (seconds < 60) ? seconds.toFixed(1) + "sec " : (seconds / 60).toFixed(2) + "min";

    // ignore a an the
    const ignoreword = ["a", "an", "the"];
    const filteredWords = word.filter(w => !ignoreword.includes(w));

    // longest word finding
    let longest = "";
    let shortest = null;
    for (let w of filteredWords) {
        if (longest.length < w.length) longest = w;
        if (shortest === null || shortest.length > w.length) shortest = w
    }
    longestWord.textContent = longest || "";
    shortestWord.textContent = shortest || "";

})