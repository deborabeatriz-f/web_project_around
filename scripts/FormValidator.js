export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _addErrorMessage(input) {
    const errorMsg = input.validationMessage;
    const errorMSgElement = input.nextElementSibling;
    errorMSgElement.textContent = errorMsg;
    errorMSgElement.classList.add(this._config.errorClass);
    input.classList.add(this._config.inputErrorClass);
  }

  _removeErrorMessage(input) {
    const errorMSgElement = input.nextElementSibling;
    errorMSgElement.textContent = "";
    errorMSgElement.classList.remove(this._config.errorClass);
    input.classList.remove(this._config.inputErrorClass);
  }

  _enableButton(form) {
    const button = form.querySelector(this._config.popupButton);
    button.classList.remove("formButton_disabled");
    button.removeAttribute("disabled", true);
  }

  _disableButton(form) {
    const button = form.querySelector(this._config.popupButton);
    button.classList.add("formButton_disabled");
    button.setAttribute("disabled", true);
  }

  _checkValidation(form, event) {
    const input = event.target;
    const isValid = input.validity.valid && !/^\s*$/.test(input.value);
    if (!isValid) {
      this._addErrorMessage(input);
      this._disableButton(form);
    } else {
      this._removeErrorMessage(input);
    }

    if (form.checkValidity()) {
      this._enableButton(form);
    }
  }

  enableValidation() {
    const forms = Array.from(
      document.querySelectorAll(this._config.formSelector)
    );
    for (const form of forms) {
      const inputs = Array.from(
        form.querySelectorAll(this._config.inputSelector)
      );
      for (const input of inputs) {
        input.addEventListener("input", (event) => {
          this._checkValidation(form, event);
        });
      }
    }
  }
}
