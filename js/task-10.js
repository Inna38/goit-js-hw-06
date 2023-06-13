const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

input.addEventListener("blur", onInput)
buttonDestroy.addEventListener("click", destroyBoxes)


function onInput(event) {
   return  createBoxes(event.currentTarget.value)
}
 
const step = 10
let width = 30;
 let height = 30;
 const backgroundColor = getRandomHexColor();





 let collection = ""
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
   const collection =  document.createElement("div")
    collection.classList.add("box")

    collection.style.width = `${width}px`;
    collection.style.height = `${height}px`;
    collection.style.backgroundColor = getRandomHexColor()
    if (amount >= 2) {
 width += step;
  height += step;
}



    // collection += `<div class="box">
    // </div>`

    // boxes.style.width = "30px"
    // boxes.style.height="30px"
    // boxes.style.backgroundColor = getRandomHexColor()
    boxes.append(collection)


  }

    //  boxes.insertAdjacentHTML("afterbegin", collection)
}
function destroyBoxes(event) {
  boxes.innerHTML = ""

}
// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.


// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.