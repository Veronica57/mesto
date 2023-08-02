export default class UserInfo {
    constructor(userProfile) {
        this._nameSelector = document.querySelector(userProfile.nameSelector);
        this._descriptionSelector = document.querySelector(
            userProfile.descriptionSelector
        );
        this._avatar = document.querySelector(userProfile.userAvatarSelector);
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
        this._avatar.src = data.avatar;
    }

    setId(id) {
        this._id = id;
    }

    getId() {
        return this._id;
    }
}
