const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("email-label");

const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

form.addEventListener("submit", validateEmail);
emailInput.addEventListener("input", validateEmail);

function validateEmail() {
  if (emailInput.value.length > 5) {
    if (emailRegex.test(emailInput.value)) {
      removeEmailError();
    } else {
      setEmailError();
    }
  }
}

function setEmailError() {
  if (!emailInput.classList.contains("input-email-error")) {
    emailInput.classList.add("input-email-error");
    emailLabel.style.visibility = "visible";
  }
}

function removeEmailError() {
  if (emailInput.classList.contains("input-email-error")) {
    emailInput.classList.remove("input-email-error");
    emailLabel.style.visibility = "hidden";
  }
}
