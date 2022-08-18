console.log(
  `Number of categories: ${document.querySelectorAll('.item').length}`
);

// console.log(
//   `Category: ${document.querySelector('.item').firstElementChild.textContent}`
// );

// console.log(document.querySelector('.item').lastElementChild.childElementCount);

// const elItems = document.querySelectorAll('.item');
// console.log(elItems);

document.querySelectorAll('.item').forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);

  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
