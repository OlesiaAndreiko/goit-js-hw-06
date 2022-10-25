const refs = {
 input : document.querySelector('#name-input'),
 name : document.querySelector('#name-output'),
}

refs.input.addEventListener('input', OnChageOutput);


// function OnChageOutput (evt) {
//     refs.name.textContent = evt.currentTarget.value;
// }


function OnChageOutput (evt) {
    if(!evt.currentTarget.value){
        refs.name.textContent = "Anonymous";
    } else refs.name.textContent = evt.currentTarget.value;
}    
