export default class UserInfo {
    constructor(
        nameSelector,
        descriptionSelector
    ) {
        this._nameSelector = document.querySelector(nameSelector);
        this._descriptionSelector = document.querySelector(descriptionSelector);
    }

    getUserInfo() {
        const name = this._nameSelector.textContent
        const proffesion = this._descriptionSelector.textContent

        const data = {
            name,
            proffesion
        }

        return data
    }

    setUserInfo = (data) => {
        this._nameSelector.textContent = data.name;
        this._descriptionSelector.textContent = data.profession
    }
}