const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');

const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

create.addEventListener('click', () => createBoxes(input.value));
destroy.addEventListener('click', destroyBoxes);
