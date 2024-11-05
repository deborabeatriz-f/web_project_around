export default class UserInfo{
  constructor(userNameSelector, userAboutSelector){
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    }

    getUserInfo(){
      const userProfileInfo = {
        name: this._userName.textContent,
        about: this._userAbout.textContent
      }
      return userProfileInfo;
    }

    setUserInfo(name, about){
      this._userName.textContent = name;
      this._userAbout.textContent = about;
    }
}