import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageSelector, titleSelector) {
    super(popupSelector);
     this._imageElement = document.querySelector(imageSelector) ;
     this._titleElement = document.querySelector(titleSelector);
  }

  open(link, name) {
    this._imageElement.src = link;
    this._titleElement.textContent = name;
    super.open();
  }
}
