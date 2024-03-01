function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.style.backgroundColor = randomColor;
  button.style.backgroundColor = randomColor;
});
