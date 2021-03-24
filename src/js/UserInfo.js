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
            about
        }) => {
            this._name.textContent = name;
            this._description.textContent = about
        })

    }
}