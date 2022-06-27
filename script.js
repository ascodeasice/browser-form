const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConf = document.getElementById("passwordConf");

function isValidUSZip(sZip) {
  return /^\d{5}(-\d{4})?$/.test(sZip);
}

//validation for email
email.addEventListener("input", () => {
  if (email.value == "") {
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