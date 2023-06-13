const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const step = 10;
let width = 30;
let height = 30;
const backgroundColor = getRandomHexColor();
const collection = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

input.addEventListener("blur", onInput);
buttonDestroy.addEventListener("click", destroyBoxes);

function onInput(event) {
  return createBoxes(event.currentTarget.value);
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const collectionEl = document.createElement("div");
      collectionEl.style.width = `${width}px`;
      collectionEl.style.height = `${height}px`;
      collectionEl.style.backgroundColor = getRandomHexColor();

      collection.push(collectionEl);
      if (amount >= 2) {
        width += step;
        height += step;
      }
    }
  }

  boxes.append(...collection);
}

function destroyBoxes(event) {
  boxes.innerHTML = "";
  input.value = "";
}
