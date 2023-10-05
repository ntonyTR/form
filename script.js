let signUpForm = document.getElementById("sign-up-form")
signUpForm.noValidate = true;

signUpForm.addEventListener("submit", validateForm)
function validateForm(e) {
  const form = e.target;
  if(form.checkValidity()){
    e.preventDefault()
    console.log("Valid!");
  }else{
    e.preventDefault()
    console.log("Invalid!");
    Array.from(signUpForm.elements).forEach(i => {
      if(i.checkValidity()){
        i.classList.remove("invalid")
      }else{
        i.classList.add("invalid")
      }
    })
  }
}