const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { 
    email, 
    password 
  } = evt.currentTarget.elements;

  // console.dir(evt.currentTarget)
  // console.log(evt.currentTarget.elements);
  // console.dir(evt.currentTarget.elements);
  
  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  evt.currentTarget.reset();
}
