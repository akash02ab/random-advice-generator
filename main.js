const adviceWrapper = document.getElementById("advice-wrapper");
const quoteId = document.getElementById("advice-id");
const quoteText = document.getElementById("advice-text");
const dice = document.getElementById("dice");

const toggleDropAnimation = () => {
  adviceWrapper.classList.toggle("drop");
  quoteText.classList.toggle("drop");
}

const getRandomeAdvice = async () => {
  const URL = "https://api.adviceslip.com/advice";
  const response = await fetch(URL, { cache: "no-store" });
  const data = await response.json();
  return data;
}

const getQuote = () => {
  getRandomeAdvice()
    .then((data) => {
      const slip = data.slip;
      quoteId.innerText = `# ${slip.id}`;
      quoteText.innerText = `"${slip.advice}"`;
      toggleDropAnimation();
      dice.disabled = false;
    })
    .catch((err) => {
      dice.disabled = false;
      console.error({ status: "OOps!, something went wrong.", detail: err });
    });
}

dice.addEventListener("click", () => {
  toggleDropAnimation();
  getQuote();
  dice.disabled = true;
});

window.onload = () => getQuote();