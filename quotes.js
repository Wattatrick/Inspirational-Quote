const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");


const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller",
  },
   {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
];


const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteElement.innerHTML = randomQuote.quote;
authorElement.innerHTML = `- ${randomQuote.author}`;

const button = document.getElementById("button");
button.addEventListener("click", () => {

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quoteElement.innerHTML = randomQuote.quote;
  authorElement.innerHTML = `- ${randomQuote.author}`;
});