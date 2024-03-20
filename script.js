const inputName = document.getElementById("input-name");
const inputLastName = document.getElementById("input-lastName");
const inputEmail = document.getElementById("input-email");
const inputCountry = document.getElementById("datalist");
const inputZipCode = document.getElementById("input-zipcode");
const inputPassword = document.getElementById("password");
const inputsData = document.querySelectorAll(".input-data");
const spans = document.querySelectorAll("#span");
const form = document.getElementById("form");

let userRegister = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  zipCode: "",
  password: ""
};

const validName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/ ;
const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const validZipCode =/^[0-9]{5}(?:-[0-9]{4})?$/;
const validPassword = /^\S{8,16}$/;

inputName.addEventListener('keyup', () => {
  if(!validName.test(inputName.value) && inputName.value.length > 0){
    spans[0].style.display = "block"
  }else{
    spans[0].style.display = "none"
  }
});

inputLastName.addEventListener('keyup', () => {
  if(!validName.test(inputLastName.value) && inputLastName.value.length > 0){
    spans[1].style.display = "block"
  }else{
    spans[1].style.display = "none"
  }
});

inputEmail.addEventListener('keyup', () => {
  if(!validEmail.test(inputEmail.value) && inputEmail.value.length > 0){
    spans[2].style.display = "block"
  }else{
    spans[2].style.display = "none"
  }
});

inputZipCode.addEventListener('keyup', () => {
  if(!validZipCode.test(inputZipCode.value) && inputZipCode.value.length > 0){
    spans[3].style.display = "block"
  }else{
    spans[3].style.display = "none"
  }
});

inputPassword.addEventListener('keyup', () => {
  if(!validPassword.test(inputPassword.value) && inputPassword.value.length > 0){
    spans[4].style.display = "block"
  }else{
    spans[4].style.display = "none"
  }
});

const checkErrors = (values) => {

  let errors = values.filter(element => 
    element.style.display === "block"
  );

  return errors.length;
}


form.addEventListener('submit', (e) => {
  
  e.preventDefault();


  let arraySpans = Array.from(spans)
  console.log(checkErrors(arraySpans));

  if(!checkErrors(arraySpans)){
    userRegister.firstName = inputName.value;
    userRegister.lastName = inputLastName.value;
    userRegister.email = inputEmail.value;
    userRegister.country = inputCountry.value;
    userRegister.zipCode = inputZipCode.value;
    userRegister.password = inputPassword.value;
  
    alert(`Welcome ${userRegister.firstName} ${userRegister.lastName}`)

  }

})



