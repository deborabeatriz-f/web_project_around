function addErrorMessage(input, config) {
  const errorMsg = input.validationMessage;
  const errorParagraph = input.nextElementSibling;
  errorParagraph.textContent = errorMsg;
  errorParagraph.classList.add(config.errorClass);
  input.classList.add(config.inputErrorClass);
}

function removeErrorMessage(input, config) {
  const errorMsg = input.validationMessage;
  const errorParagraph = input.nextElementSibling;
  errorParagraph.textContent = "";
  errorParagraph.classList.remove(config.errorClass);
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
  const isValid = input.validity.valid;
  if (!isValid) {
    addErrorMessage(input, config);
    disableButton(input.id, config);
  } else {
    removeErrorMessage(input, config);
    enableButton(input.id, config);
  }
}

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll("form"));

  for (const form of forms) {
    const inputs = Array.from(form.querySelectorAll("input"));
    for (const input of inputs) {
      input.addEventListener("input", (event) => {
        checkValidation(event, config);
      });
    }
  }
}

enableValidation({
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage-show",
  popupProfileButton: ".input__submit-save",
  popupCardButton: ".input__submit-add",
});

//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
////////////////////////////////////////////////////
// formSelector: ".popup__input",
// inputSelector: ".input__text",
// submitButtonSelector: ".input__submit",
// inactiveButtonClass: ".formButton_disabled",

//SPRINT 9
//Validação dos Formulários:
// Configurar validações JS CSS
//Nova Imagem/Local:
//Url da imagem deve conter uma URL

// Habilitando a validação chamando enableValidation()
// Valide todas as configurações
