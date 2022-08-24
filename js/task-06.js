const input = document.querySelector('#validation-input');
const dataLength = document.querySelector('#validation-input');
const inputLength = input.dataset.length;

input.addEventListener('blur', checkLength);

function checkLength(event) {
  if (event.currentTarget.value.length === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  } else if (event.currentTarget.value.length <= inputLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else if (event.currentTarget.value.length > inputLength) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
