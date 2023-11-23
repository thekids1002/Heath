import { makeAutoObservable } from "mobx";

class LichKhamStore {
    dataLichKham = [];

    constructor() {
        makeAutoObservable(this);
    }

    addLichKham(lichKham) {
        this.dataLichKham.push(lichKham);
    }

    removeLichKham(lichKhamId) {
        this.dataLichKham = this.dataLichKham.filter(lichKham => lichKham.id !== lichKhamId);
    }

    // Có thể thêm các phương thức khác nếu cần
}

const lichKhamStore = new LichKhamStore();
export default lichKhamStore;
