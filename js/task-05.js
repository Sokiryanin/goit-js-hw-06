const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

const handleInputName = (event) => {
  outputNameEl.textContent = event.target.value;
  //   if (outputNameEl === "") return "Anonymous";
};
inputNameEl.addEventListener("input", handleInputName);
