class API {
    lsName: string;
    constructor() {
        this.lsName = 'math-game-user';
    }

    getData() {
        return JSON.parse(localStorage.getItem(this.lsName)) || {};
    }

    getUserData() {
        return this.getData()?.user || null;
    }

    getSettingsData() {
        return this.getData()?.settings || null;
    }

    setUserData(newData: {}) {
        const data = this.getData();
        console.log(data);
        data.user = newData;
        localStorage.setItem(this.lsName, JSON.stringify(data));
    }

    setSettingsData(newData: {}) {
        const data = this.getData();
        data.settings = newData;
        localStorage.setItem(this.lsName, JSON.stringify(data));
    }
}

export default new API();
