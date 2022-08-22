let counterValue = 0;
const actions = document.querySelectorAll('#counter button');
const counterValueInSpan = document.querySelector('#value');
const decButton = actions[0];
const incButton = actions[1];

const decrease = event => {
  counterValue -= 1;
  counterValueInSpan.innerHTML = `<span id="value">${counterValue}</span>`;
};

const increase = event => {
  counterValue += 1;
  counterValueInSpan.innerHTML = `<span id="value">${counterValue}</span>`;
};

decButton.addEventListener('click', decrease);
incButton.addEventListener('click', increase);
