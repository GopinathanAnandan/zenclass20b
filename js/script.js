const URL = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("quote-btn");

const getQuote = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        quote.innerText = data.content;
        author.innerText = data.author;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
};

window.addEventListener("load", getQuote);
button.addEventListener("click", getQuote);