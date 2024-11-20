export default class UserInfo {
  constructor(userNameSelector, userAboutSelector, userAvatarSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    const userProfileInfo = {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
      avatar: this._userAvatar.src,
    };
    return userProfileInfo;
  }

  setUserInfo(name, about, avatar) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userAvatar.src = avatar;
  }
}
