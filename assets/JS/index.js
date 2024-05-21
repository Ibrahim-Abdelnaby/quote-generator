var card = document.getElementById("card")
var quote = document.getElementById("quote");
var author = document.getElementById("authorName");


var quoteList = [
    {
        quote: "The only way to do great work is to love what you do and never settle for anything less.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal, It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Don't walk in front of me, I may not follow Don't walk behind me, I may not lead Walk beside me, just be my friend",
        author: "Albert Camus"
    }
];

let usedIndexes = [];

var randomQuotes = function() {

if (usedIndexes.length === quoteList.length) {
    usedIndexes = [];
  }

//   var randomIndex = Math.floor(Math.random() * quoteList.length);
//   while (usedIndexes.includes(randomIndex)) {
//     randomIndex = Math.floor(Math.random() * quoteList.length);
//   }

  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quoteList.length);
  } while (usedIndexes.includes(randomIndex));

  usedIndexes.push(randomIndex);

  return quoteList[randomIndex];
};

var generateQuotes = function() {
    quote.innerText = randomQuotes().quote;
    author.innerText = randomQuotes().author;
}