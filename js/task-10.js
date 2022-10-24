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
destroyBtn.addEventListener('click', remoteBoxes);


function onInputNumber(evt) {
  inputValue = Number(evt.currentTarget.value)
  return inputValue;

  // return Number(evt.currentTarget.value) 
}

function createBoxes(amount) {
  amount = inputValue;
  console.log(amount)
  const boxes =[];
  let counter = 10

  // for(let i = 1; i < amount; i =+ 1){
  //   const box = document.createElement('div');
  //   box.style.width = "30px";
  //   box.style.height = "30px";
  //   box.style.backgroundColor = getRandomHexColor();
  //   boxes.push(box);   
  // }
  
  //   console.log(boxes)
  //   boxesCollection.append(...boxes)
  //   console.log(boxesCollection)
  // }

    

  do {
    const box = document.createElement('div');
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box)
  } while (boxes.length < amount);

  console.log(boxes)
  boxesCollection.append(...boxes)
  console.log(boxesCollection)
}

// const changeValue = 30 + counter
// box.style.width = `${changeValue}px`;
// box.style.height = `${changeValue}px`;


function remoteBoxes() {
  // console.dir(boxesCollection)
  boxesCollection.innerHTML = "";
}