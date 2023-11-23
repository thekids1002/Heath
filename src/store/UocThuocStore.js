import { makeAutoObservable } from "mobx";
import AsyncStorage from '@react-native-async-storage/async-storage';
class UocThuocStore {
    dataUocThuoc = [];

    constructor() {
        makeAutoObservable(this);
    }

    addUocThuoc(item) {
        this.dataUocThuoc.push(item);
        this.storeData(this.dataUocThuoc);
    }

    storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('my-keyy', jsonValue);
      } catch (e) {
        console.log("Lỗi save addUocThuoc", e)
      }
    };

    // Các phương thức khác nếu cần
}

const uocThuocStore = new UocThuocStore();
export default uocThuocStore;
