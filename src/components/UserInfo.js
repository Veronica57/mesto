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
            useravatar: this._currentAvatar.src,
        };
    }

    setUserInfo({ userdescription, username, useravatar }) {
        this._currentName.textContent = username;
        this._currentDescription.textContent = userdescription;
        this._currentAvatar.src = useravatar;
    }

    setId(id) {
        this._id = id;
    }

    getId() {
        return this._id;
    }
}
