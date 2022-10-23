const refs = {
    input : document.querySelector('#validation-input'),
   }

refs.input.addEventListener('blur', OnChageOutput) 

function OnChageOutput (evt) {

    // console.log(evt.currentTarget.dataset.length)
    // console.log(evt.currentTarget.value)

const inputValidationLength = evt.currentTarget.dataset.length
const inputCurrentLength = evt.currentTarget.value.length
    if (inputCurrentLength < inputValidationLength) {     
    refs.input.classList.add('invalid') 
    refs.input.classList.replace('valid', 'invalid')  
    // alert(`Number of symbols ${inputCurrentLength}. Please enter 6 symbols!`)   
    } else {
    refs.input.classList.add('valid')     
    refs.input.classList.replace('invalid', 'valid')
    }
}

