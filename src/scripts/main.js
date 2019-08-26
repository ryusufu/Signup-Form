import "./../scss/main.scss";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstNameLabel = document.getElementById("first-name-label");
const lastNameLabel = document.getElementById("last-name-label");
const emailLabel = document.getElementById("email-label");
const passwordLabel = document.getElementById("password-label");

const form = document.getElementById("signUp-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  checkFields();
});

form.addEventListener("input", e => {
  if (
    e.target === firstName ||
    e.target === lastName ||
    e.target === password
  ) {
    e.target.classList.remove("error-border");
    e.target.nextElementSibling.classList.replace("show", "hide");
  }

  if (e.target === email) {
    if (isValidEmail(e.target.value)) {
      e.target.style.color = "black";
      e.target.classList.remove("error-border");
      e.target.nextElementSibling.classList.replace("show", "hide");
    }
  }
});

function checkFields() {
  if (!firstName.value) {
    firstName.classList.add("error-border");
    firstNameLabel.classList.replace("hide", "show");
  }

  if (!lastName.value) {
    lastName.classList.add("error-border");
    lastNameLabel.classList.replace("hide", "show");
  }
  if (!isValidEmail(email.value)) {
    email.classList.add("error-border");
    email.style.color = "hsl(0, 100%, 66%)";
    emailLabel.classList.replace("hide", "show");
  }
  if (!password.value) {
    password.classList.add("error-border");
    passwordLabel.classList.replace("hide", "show");
  }
}

const isValidEmail = function(input) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
    return true;
  }
  return false;
};
