import { makeAutoObservable } from "mobx";
import AsyncStorage from '@react-native-async-storage/async-storage';
class LichKhamStore {
    dataLichKham = [];

    constructor() {
        makeAutoObservable(this);
    }

    addLichKham(lichKham) {
        this.dataLichKham.push(lichKham);
        this.storeData(this.dataLichKham)
    }

     storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('my-key', jsonValue);
      } catch (e) {
      console.log("Lỗi save", e)
      }
    };

    removeLichKham(lichKhamId) {
        this.dataLichKham = this.dataLichKham.filter(lichKham => lichKham.id !== lichKhamId);
    }

    updateIsDone = (item) => {
        for (let i = 0; i < this.dataLichKham.length; i++) {
          if ( this.dataLichKham[i].id === item.id) {
            
            this.dataLichKham[i].isDone = true;
      
            this.storeData(this.dataLichKham);
      
            break; 
          }
        }
      };

    // Có thể thêm các phương thức khác nếu cần
}

const lichKhamStore = new LichKhamStore();
export default lichKhamStore;
