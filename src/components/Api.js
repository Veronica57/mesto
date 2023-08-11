export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    }

    _checkQuery(res) {
        return res.ok ? res.json() : Promise.reject;
    }

    getInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkQuery);
    }

    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkQuery);
    }

    patchUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.userdescription,
            }),
        }).then(this._checkQuery);
    }

    patchAddAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.useravatar,
            }),
        }).then(this._checkQuery);
    }

    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.imagename,
                link: data.imagelink,
            }),
        }).then(this._checkQuery);
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkQuery);
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkQuery);
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/`, {
            method: "DELETE",
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkQuery);
    }
}
