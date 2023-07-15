const quote = document.getElementById("quote");
const quoteNumber = document.getElementById("number");
const diceButton = document.getElementById("dice-cta");

const getQuote = async function () {
  console.log("Something worked! 🚀");
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data = await response.json();
  const responseId = data.slip.id;
  const responseQuote = data.slip.advice;
  quoteNumber.innerText = responseId;
  quote.innerText = responseQuote;
  console.log(data);
};

diceButton.addEventListener("click", (e) => {
  getQuote();
});
