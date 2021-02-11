let button = document.getElementById("free-trial-button");
let nameInput = document.getElementById("name-input");
let lastNameInput = document.getElementById("last-name-input");
let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");

let inputContainer = document
  .querySelector("form")
  .querySelectorAll(".input-container");

button.addEventListener("click", (e) => {
  validateForm();
});

function validateForm() {
  let sendForm = true;
  for (input of inputContainer) {
    let errorIcon = input.querySelector("img");
    let id = input.querySelector("input");
    let errorMessage = input.querySelector("p");

    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      (id.id == "name-input" ||
        id.id == "last-name-input" ||
        id.id == "email-input" ||
        id.id == "password-input") &&
      (id.value == "" || (id.id == "email-input" && !emailRegex.test(id.value)))
    ) {
      errorIcon.style.visibility = "visible";
      errorMessage.style.display = "block";
      sendForm = sendForm && false;
    } else {
      errorIcon.style.visibility = "hidden";
      errorMessage.style.display = "none";
      sendForm = sendForm && true;
    }
  }

  if (sendForm) {
    document.form.submit();
  }
}
