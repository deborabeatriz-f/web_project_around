import Popup from "../components/Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitDelete) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._submitDelete = submitDelete;
    this._confirmDeleteBtn = this._popup.querySelector(".input__submit-delete");
  }

  open(cardId, cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    const deleteCardForm = document.querySelector(".input-deleteCard");
    deleteCardForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitDelete(this._cardId, this._cardElement);
      this.close();
    });
  }

  close() {
    super.close();
  }
}
