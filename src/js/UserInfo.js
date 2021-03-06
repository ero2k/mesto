export default class UserInfo {
    constructor(
        nameSelector,
        descriptionSelector
    ) {
        this._name = document.querySelector(nameSelector);
        this._description = document.querySelector(descriptionSelector);
    }

    getUserInfo() {
        const name = this._name.textContent
        const proffesion = this._description.textContent

        const data = {
            name,
            proffesion
        }

        return data
    }

    setUserInfo = (data) => {
        this._name.textContent = data.name;
        this._description.textContent = data.profession
    }
}