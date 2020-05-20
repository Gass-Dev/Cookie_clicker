export {
    Bakery
};

class Bakery {
    constructor(name = "Jeannette", cookies = 0, buildings, cookiersPerClick = 1, cookiesPerSecond = 0) {
        this._name = name
        this._cookies = cookies
        this._buildings = buildings
        this._cookiesPerClick = cookiersPerClick
        this._cookiesPerSecond = cookiesPerSecond
    }
    bakeCookies() {
        return this._cookies += this._cookiesPerClick;
    }

}