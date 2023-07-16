export default class UserInfo {
    constructor(userProfile) {
        this._nameSelector = document.querySelector(userProfile.nameSelector);
        this._descriptionSelector = document.querySelector(
            userProfile.descriptionSelector
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
