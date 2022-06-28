const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConf = document.getElementById("passwordConf");
const specialCharRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

//validation for email
email.addEventListener("input", () => {
  if (email.validity.valueMissing) {
    email.setCustomValidity("You must enter email");
    email.reportValidity();
  }
  else if (email.validity.typeMismatch) {
    email.setCustomValidity("Invalid email");
    email.reportValidity();
  }
  else {
    email.setCustomValidity("");
  }
})

country.addEventListener("input", () => {
  if (country.validity.valueMissing) {
    country.setCustomValidity("country is required");
    country.reportValidity();
  }
  else {
    country.setCustomValidity("");
  }
})

zipCode.addEventListener("input", () => {
  if (zipCode.validity.valueMissing) {
    zipCode.setCustomValidity("Zip code is required");
    zipCode.reportValidity();
  }
  else if (zipCode.validity.patternMismatch) {
    zipCode.setCustomValidity("Invalid zip code");
    zipCode.reportValidity();
  }
  else {
    zipCode.setCustomValidity("");
  }
})

password.addEventListener("input", () => {
  if (password.validity.valueMissing) {
    password.setCustomValidity("password is required");
    password.reportValidity();
  }
  else if (!/\d/.test(password.value)) {
    password.setCustomValidity("password need to contain at least one number");
    password.reportValidity();
  }
  else if (!specialCharRegex.test(password.value)) {
    password.setCustomValidity("password need to contain at least one special character");
    password.reportValidity();
  }
  else if (!/[A-Z]/.test(password.value)) {
    password.setCustomValidity("password need to contain at least one uppercase character");
    password.reportValidity();
  }
  else if (!/[a-z]/.test(password.value)) {
    password.setCustomValidity("password need to contain at least one lowercase character");
    password.reportValidity();
  }
  else if (password.validity.tooShort) {
    password.setCustomValidity("password is too short(at least 8)");
    password.reportValidity();
  }
  else {
    password.setCustomValidity("");
  }
})

passwordConf.addEventListener("input", () => {
  if (passwordConf.validity.valueMissing) {
    passwordConf.setCustomValidity("You need to confirm your password");
    passwordConf.reportValidity();
  }
  else if (passwordConf.value != password.value) {
    passwordConf.setCustomValidity("The passwords don't match");
    passwordConf.reportValidity();
  }
  else {
    passwordConf.setCustomValidity("");
  }
})