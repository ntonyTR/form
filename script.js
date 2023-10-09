let signUpForm = document.getElementById("sign-up-form");
signUpForm.noValidate = true;

signUpForm.addEventListener("submit", validateForm);
signUpForm.addEventListener("submit", validatePasswords);

function validateForm(e) {
  const form = e.target;
  if (!form.checkValidity()) {
    e.preventDefault();
    highlightInvalid(form);
  }
}

function highlightInvalid(form) {
  Array.from(form.elements).forEach((ele) => {
    if (ele.checkValidity()) {
      ele.classList.remove("invalid");
      removeErrorMessage(ele, "invalid");
    } else {
      ele.classList.add("invalid");
      showErrorMessage(ele, "invalid");
    }
  });
}

function removeErrorMessage(ele, className) {
  let span = ele.nextElementSibling;
  if (span) {
    span.classList.remove(className);
  }
}

function showErrorMessage(ele, className) {
  let span = ele.nextElementSibling;
  if (span) {
    span.classList.add(className);
  }
}

function validatePasswords(e) {
  let password = document.getElementById("password");
  let passwordConfirm = document.getElementById("password-confirm");

  if (!password.value || !passwordConfirm) {
    e.preventDefault();
    password.classList.add("invalid");
    passwordConfirm.classList.add("invalid");
    return
  } else if (password.value !== passwordConfirm.value) {
    e.preventDefault();
    showErrorMessage(password, "error");
    showErrorMessage(passwordConfirm, "error");
    console.log(password);
    console.log(passwordConfirm);
    return;
  } else {
    password.classList.remove("invalid");
    passwordConfirm.classList.remove("invalid");
    removeErrorMessage(password, "error")
    removeErrorMessage(passwordConfirm, "error");
  }
}
