const quote = document.getElementById("quote");
const quoteNumber = document.getElementById("number");
const diceButton = document.getElementById("dice-cta");

const getQuote = async function () {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const responseId = data.slip.id;
  const responseQuote = data.slip.advice;
  quoteNumber.innerText = responseId;
  quote.innerText = responseQuote;
};

getQuote();

diceButton.addEventListener("click", (e) => {
  //   quoteNumber.innerText = "";
  //   quote.innerText = "";
  getQuote();
});
