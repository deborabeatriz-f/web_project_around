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

function enableButton(item, config) {
  if (item == "name" || item == "job") {
    const buttonProfile = document.querySelector(config.popupProfileButton);
    buttonProfile.classList.remove("formButton_disabled");
    buttonProfile.removeAttribute("disabled", true);
  }
  if (item == "title" || item == "url") {
    const buttonImage = document.querySelector(config.popupCardButton);
    buttonImage.classList.remove("formButton_disabled");
    buttonImage.removeAttribute("disabled", true);
  }
}

function disableButton(item, config) {
  if (item == "name" || item == "job") {
    const buttonProfile = document.querySelector(config.popupProfileButton);
    buttonProfile.classList.add("formButton_disabled");
    buttonProfile.setAttribute("disabled", true);
  }
  if (item == "title" || item == "url") {
    const buttonImage = document.querySelector(config.popupCardButton);
    buttonImage.classList.add("formButton_disabled");
    buttonImage.setAttribute("disabled", true);
  }
}

function checkValidation(event, config) {
  const input = event.target;
  const isValid = input.validity.valid && !/^\s*$/.test(input.value);
  if (!isValid) {
    addErrorMessage(input, config);
    disableButton(input.id, config);
  } else {
    removeErrorMessage(input, config);
    enableButton(input.id, config);
  }
}

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));

  for (const form of forms) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    for (const input of inputs) {
      input.addEventListener("input", (event) => {
        checkValidation(event, config);
      });
    }
  }
}

enableValidation({
  formSelector: "form",
  inputSelector: "input",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage-show",
  popupProfileButton: ".input__submit-save",
  popupCardButton: ".input__submit-add",
});
