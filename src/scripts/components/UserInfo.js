export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._userName = nameSelector;
    this._userDescription = descriptionSelector;
  }

  getUserInfo() {
    // Можно было бы сразу возвращать объект, без создания новой переменной в памяти
    const userInfo = {
      name: this._userName.textContent,
      description: this._userDescription.textContent
    };

    return userInfo;
  }

  setUserInfo({name, description}) {
    this._userName.textContent = name;
    this._userDescription.textContent = description;
  }
}
