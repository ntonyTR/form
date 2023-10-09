  let signUpForm = document.getElementById("sign-up-form");
signUpForm.noValidate = true;

signUpForm.addEventListener("submit", validateForm);

function validateForm(e) {
  const form = e.target;
  if (form.checkValidity()) {
    e.preventDefault(); // TEST
    console.log("Valid!"); // TEST
  } else {
    e.preventDefault(); // TEST
    console.log("Invalid!"); // TEST

    highlightInvalid(signUpForm)
  }
}

function highlightInvalid(form){
  Array.from(form.elements).forEach((ele) => {
    if(ele.checkValidity()){
      ele.classList.remove("invalid");
    } else {
      ele.classList.add("invalid");
    }
  })
}

signUpForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("password-confirm").value;

  console.log("password:", password);
  console.log("confirm password:", passwordConfirm);

  if(password === passwordConfirm){
    console.log("Match!");
  }else{
    console.log("Mismatch!");
  }
});

function validatePasswords(e){
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("password-confirm").value;

  if(password === passwordConfirm){
    console.log("MATCH"); //TEST
  }else{
    console.log("MISMATCH"); //TEST
    e.preventDefault()
    //AQUI
  }
}