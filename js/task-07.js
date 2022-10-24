const rangeInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

// console.log(rangeInput);
// console.dir(rangeInput);


rangeInput.addEventListener('input', onOutputTextSize);

function onOutputTextSize(evt) {
    // console.log(typeof(evt.currentTarget.value));
    // console.log(Number(evt.currentTarget.value));
  
    textOutput.style.fontSize = `${Number(evt.currentTarget.value)}px`;
    // console.log(textOutput.style.fontSize);
    }
