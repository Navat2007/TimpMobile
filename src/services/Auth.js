class Auth {

    constructor() {

        this.authenticated = false;

    }

    login(data, cb) {

        if(data.login == "admin" && data.password == "admin")
        {
            this.authenticated = true;
            cb();
        }

    }

    logout(cb) {

        this.authenticated = false;
        cb();

    }

    isAuthenticated() {

        return this.authenticated;

    }

}

export default new Auth();