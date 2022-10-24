function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// console.log(getRandomHexColor());
// console.log(typeof(getRandomHexColor()));


const body =  document.querySelector('body');
// console.dir(body.style);
const colorName = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onChangeBackgroundColorBody);

function onChangeBackgroundColorBody() {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = body.style.backgroundColor;  
    
  // console.log(body.style);
}
