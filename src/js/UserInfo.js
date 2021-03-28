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
        data.then(({
            name,
            about,
            avatar
        }) => {
            this._name.textContent = name;
            this._description.textContent = about;
            this._avatar.src = avatar
        })

    }
}