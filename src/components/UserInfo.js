export default class UserInfo {
    constructor(userProfile) {
        this._currentName = document.querySelector(userProfile.nameSelector);
        this._currentDescription = document.querySelector(
            userProfile.descriptionSelector
        );
        this._currentAvatar = document.querySelector(
            userProfile.userAvatarSelector
        );
    }

    getUserInfo() {
        return {
            username: this._currentName.textContent,
            userdescription: this._currentDescription.textContent,
        };
    }

    setUserInfo({ userdescription, username, useravatar }) {
        this._currentName.textContent = username;
        this._currentJob.textContent = userdescription;
    }

    setId(id) {
        this._id = id;
    }

    getId() {
        return this._id;
    }
}
