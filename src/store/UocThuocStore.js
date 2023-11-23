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

    updateIsDone = (item) => {
      for (let i = 0; i < this.dataUocThuoc.length; i++) {
        if ( this.dataUocThuoc[i].id === item.id) {
          // Tìm thấy item trong mảng dataUocThuoc
          // Cập nhật trạng thái isDone của item
          this.dataUocThuoc[i].isDone = true; // Hoặc bất kỳ giá trị mới bạn muốn gán cho isDone
    
          this.storeData(this.dataUocThuoc);
    
          break; // Kết thúc vòng lặp sau khi tìm thấy và cập nhật item
        }
      }
    };


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
