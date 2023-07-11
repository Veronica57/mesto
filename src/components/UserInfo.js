export default class UserInfo {
    constructor(userInfo) {
        this._nameSelector = document.querySelector(userInfo.nameSelector);
        this._descriptionSelector = document.querySelector(
            userInfo.descriptionSelector
        );
    }

    getUserInfo() {
        return {
            name: this._nameSelector.texContent,
            description: this._descriptionSelector.texContent,
        };
    }

    setUserInfo(data) {
        this._nameSelector.texContent = data.name;
        this._descriptionSelector.texContent = data.description;
    }
}
