import { makeAutoObservable } from "mobx";

class UocThuocStore {
    dataUocThuoc = [];

    constructor() {
        makeAutoObservable(this);
    }

    addUocThuoc(item) {
        this.dataUocThuoc.push(item);
        console.log("additem")
    }

    // Các phương thức khác nếu cần
}

const uocThuocStore = new UocThuocStore();
export default uocThuocStore;
