function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxesCollection = document.querySelector('#boxes')
let inputValue

inputNumber.addEventListener('input', onInputNumber);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


function onInputNumber(evt) {
  inputValue = Number(evt.currentTarget.value)
}


function createBoxes(amount) {
  amount = inputValue;
  // console.log(amount)
  const boxes =[];
  
  do {
    const box = document.createElement('div');
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box)
    } while (boxes.length < amount);

  boxesCollection.append(...boxes)

  // console.log(boxesCollection)
  // console.log(boxes)

  boxes.forEach((box, idx) => {
    const counter = idx * 10
    // console.log(idx)
    // console.log(counter)
    // console.log(box.style.width)
    box.style.width = `${Number.parseInt(box.style["width"]) + counter}px`
    box.style.height = `${Number.parseInt(box.style["height"]) + counter}px`
    // console.log(box.style.width)
  })  
}


function destroyBoxes() {
  boxesCollection.innerHTML = "";
}
