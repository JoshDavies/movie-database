import { makeObservable, observable, action } from "mobx"

class Store {
    isChecked: boolean = false

    constructor() {
        makeObservable(this, {
            isChecked: observable,
            toggle: action
        })
    }

    public toggle():void {
        this.isChecked = !this.isChecked
    }
}
const store = new Store();
export default store;