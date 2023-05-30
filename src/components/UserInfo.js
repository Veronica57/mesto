export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
        this._name = document.querySelector(nameSelector);
        this._description = document.querySelector(descriptionSelector);
    }

    getUserInfo() {
        return {
            userName: this._user.texContent,
            userDescription: this._description.texContent,
        };
    }

    setUserInfo(data) {
        this._user.texContent = data.userName;
        this._description.texContent = data.userDescription;
    }
}
