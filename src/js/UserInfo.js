export default class UserInfo {
    constructor(
        nameSelector,
        descriptionSelector,
        avatarSelector
    ) {
        this._name = document.querySelector(nameSelector);
        this._description = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const name = this._name.textContent
        const about = this._description.textContent

        const data = {
            name,
            about
        }
        return data
    }

    setUserInfo = (data) => {

            this._name.textContent = data.name;
            this._description.textContent = data.about;
            this._avatar.src = data.avatar
        }

        updateAvatar = (avatar) =>{
            this._avatar.src = avatar
        }

    }
