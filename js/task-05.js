const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

const handleInputName = (event) => {
  const {value} = event.target;

  outputNameEl.textContent = value === '' ? 'Anonymous' : value;
};
inputNameEl.addEventListener("input", handleInputName);
