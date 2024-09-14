function addErrorMessage(input, config) {
  const errorMsg = input.validationMessage;
  const errorMSgElement = input.nextElementSibling;
  errorMSgElement.textContent = errorMsg;
  errorMSgElement.classList.add(config.errorClass);
  input.classList.add(config.inputErrorClass);
}

function removeErrorMessage(input, config) {
  const errorMsg = input.validationMessage;
  const errorMSgElement = input.nextElementSibling;
  errorMSgElement.textContent = errorMsg;
  errorMSgElement.classList.remove(config.errorClass);
  input.classList.remove(config.inputErrorClass);
}

function enableButton(form, config) {
  const button = form.querySelector(config.popupButton);
  button.classList.remove("formButton_disabled");
  button.removeAttribute("disabled", true);
}

function disableButton(form, config) {
  const button = form.querySelector(config.popupButton);
  button.classList.add("formButton_disabled");
  button.setAttribute("disabled", true);
}

function checkValidation(form, event, config) {
  const input = event.target;
  const isValid = input.validity.valid && !/^\s*$/.test(input.value);
  if (!isValid) {
    addErrorMessage(input, config);
    disableButton(form, config);
  } else {
    removeErrorMessage(input, config);
  }
  if (form.checkValidity()) {
    enableButton(form, config);
  }
}

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  for (const form of forms) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    for (const input of inputs) {
      input.addEventListener("input", (event) => {
        checkValidation(form, event, config);
      });
    }
  }
}

enableValidation({
  formSelector: "form",
  inputSelector: "input",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage-show",
  popupButton: ".input__submit",
  // popupProfileButton: ".input__submit-save",
  // popupCardButton: ".input__submit-add",
});
