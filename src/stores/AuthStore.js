import {observable} from "mobx";

class AuthStore {

    @observable user = {
        name: 'sunwoo.kim',
        age: 30
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

}

export default AuthStore;
