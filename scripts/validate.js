//SPRINT 9
//Validação dos Formulários:
// Configurar validações JS CSS
//Nova Imagem/Local:
//Url da imagem deve conter uma URL

// Habilitando a validação chamando enableValidation()
// Valide todas as configurações

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
