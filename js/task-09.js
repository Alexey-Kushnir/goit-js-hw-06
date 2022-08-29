function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', () => {
  const randomCollor = getRandomHexColor();
  body.style.backgroundColor = randomCollor;
  span.style.backgroundColor = randomCollor;
  button.style.backgroundColor = randomCollor;
});
