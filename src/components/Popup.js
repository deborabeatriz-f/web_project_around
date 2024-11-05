export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add("popup__opened");
    document.addEventListener("keydown", (event) =>
      this._handleEscClose(event)
    );
  }

  close() {
    this._popup.classList.remove("popup__opened");
    document.removeEventListener("keydown", (event) =>
      this._handleEscClose(event)
    );
  }

  _handleEscClose(event) {
    if (event.key == "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__button-close");
    closeButton.addEventListener("click", this.close);
    this._popup.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("popup__opened") ||
        event.target.classList.contains("popup__bigImage-card")
      ) {
        this.close();
      }
    });
  }
}
