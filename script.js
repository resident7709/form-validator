const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // *Using Constraint API
  isValid = form.checkValidity();
  // *Message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields..";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // *Check passwords
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "#00d500";
    password2El.style.borderColor = "#00d500";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match..";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // * Form success
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "#00d500";
    messageContainer.style.borderColor = "#00d500";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // *Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // *Validate Form
  validateForm();
  // *Submit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// *Event Listener
form.addEventListener("submit", processFormData);
