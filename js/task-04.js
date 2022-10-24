const addUnitBtn = document.querySelector('[data-action="increment"]');
const removeUnitBtn = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector('#value');


addUnitBtn.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
})

removeUnitBtn.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
})
