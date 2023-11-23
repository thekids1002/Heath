import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
    Modal,
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uocThuocStore from '../store/UocThuocStore';
import LichKhamStore from '../store/LichKhamStore';
import lichKhamStore from '../store/LichKhamStore';
const dataUocThuocArr = [
    
];
const dataLichKhamArr = [
    
];
const Notification = () => {

   

    const [modalVisible, setModalVisible] = useState(false);
    const [modalNhapThuoc, setmodalNhapThuoc] = useState(false);
    const [modalLichKham, setModalLichKham] = useState(false);
    const [dataUocThuoc, setDataUocThuoc] = useState(dataUocThuocArr);
    const [dataLichKham, setDataLichKham] = useState(dataLichKhamArr);

    const openModalNhapThuoc = () => setmodalNhapThuoc(true);

    const closeModalNhapThuoc = async () => {
        setmodalNhapThuoc(false);
        await handleSaveDataUongThuoc();
    };


    const openModalLichKham = () => setModalLichKham(true);

    const closeModalLichKham = async () => {
        setModalLichKham(false);
        await handleSaveDataLichKham();
    };
   
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const [selectedDay, setSelectedDay] = useState(() => {
        const currentDate = new Date();
        return currentDate.toISOString().split('T')[0]; // Định dạng YYYY-MM-DD
    });

     // AsyncStorage functions
     const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
            console.error('Failed to save data', e);
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('my-key');
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            console.error('Failed to read data', e);
        }
    };

    // Load data from AsyncStorage on component mount
    useEffect(() => {
        const fetchData = async () => {
            const storedData = await getData();
           
        };

        fetchData();
    }, []);


    const formatTimeToAmPm = dateString => {
        const date = new Date(dateString);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutesStr + ' ' + ampm;
    };

    const [medicineName, setMedicineName] = useState('');
    const [details, setDetails] = useState('');
    const [time, setTime] = useState('');

    const loadItems = day => { };



    const handleSaveDataUongThuoc = async () => {
        if (selectedDay === null) {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
            const currentDay = currentDate.getDate();
            const currentDateString = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
            setSelectedDay(currentDateString);
        }
        
        const selectedDateTime = new Date(selectedDay); // Chuyển đổi selectedDay thành đối tượng Date nếu cần
        const [hour, minute] = time.split(':'); // Phân tách giờ và phút
        
        selectedDateTime.setHours(hour);
        selectedDateTime.setMinutes(minute);
        
        // Áp dụng chênh lệch múi giờ UTC+7
        selectedDateTime.setMinutes(selectedDateTime.getMinutes() - selectedDateTime.getTimezoneOffset() - 420);
        
        const newItem = {
            id: String( uocThuocStore.dataUocThuoc.length + 1), // Tạo ID mới duy nhất
            title: medicineName,
            description: details,
            day: selectedDay,
            time : selectedDateTime.toISOString(),
            isDone: false,
        };
        await uocThuocStore.addUocThuoc(newItem); // Sử dụng await để chờ hàm thêm item hoàn thành
        const temp = selectedDay;
        const changeDay = (newDay) => {
            setSelectedDay(newDay);
        };
        changeDay('2023-01-01');
        setSelectedDay(temp);
    };


    const handleSaveDataLichKham = async () => {
        if (selectedDay === null) {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
            const currentDay = currentDate.getDate();
            const currentDateString = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
            setSelectedDay(currentDateString);
        }
        
        const selectedDateTime = new Date(selectedDay); // Chuyển đổi selectedDay thành đối tượng Date nếu cần
        const [hour, minute] = time.split(':'); // Phân tách giờ và phút
        
        selectedDateTime.setHours(hour);
        selectedDateTime.setMinutes(minute);
        
        // Áp dụng chênh lệch múi giờ UTC+7
        selectedDateTime.setMinutes(selectedDateTime.getMinutes() - selectedDateTime.getTimezoneOffset() - 420);
        
        const newItem = {
            id: String( lichKhamStore.dataLichKham.length + 1), 
            title: medicineName,
            description: details,
            day: selectedDay,
            time : selectedDateTime.toISOString(),
            isDone: false,
        };
        await lichKhamStore.addLichKham(newItem); 
        const temp = selectedDay;
        const changeDay = (newDay) => {
            setSelectedDay(newDay);
        };
        changeDay('2023-01-01');
        setSelectedDay(temp);
    };


    const renderEmptyData = () => {
        return <View></View>;
    };

    const handleDayPress = day => {
        // Xử lý khi ngày được chọn
        const selectedDate = new Date(day.dateString);
        setSelectedDay(selectedDate); 
      
    }; 


    useEffect(() => {
        const filteredData = uocThuocStore.dataUocThuoc.filter(item => {
            const itemDate = new Date(item.day);
            const selectedDate = new Date(selectedDay);
            return itemDate.toDateString() === selectedDate.toDateString();
        });
        setDataUocThuoc(filteredData);
       
        const filteredData2 = lichKhamStore.dataLichKham.filter(item => {
            const itemDate = new Date(item.day);
            const selectedDate = new Date(selectedDay);
            return itemDate.toDateString() === selectedDate.toDateString();
        });
        setDataLichKham(filteredData2);


    }, [selectedDay]);

  

      
    return (
        <SafeAreaView>
            <ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>This is a modal!</Text>
                            <TouchableOpacity style={styles.button} onPress={closeModal}>
                                <Text style={styles.buttonText}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalNhapThuoc}
                    onRequestClose={closeModalNhapThuoc}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <View
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Image source={require('../img/Group53.png')} />
                                </View>
                                <View
                                    style={{
                                        height: 1,
                                        backgroundColor: 'black',
                                        marginVertical: 5,
                                    }}
                                />
                                <View style={{ display: 'flex', flexDirection: 'column' }}>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{ flex: 0.5, color: 'black' }}>
                                            Nhập tên thuốc
                                        </Text>
                                        <TextInput
                                            style={styles.input}
                                            value={medicineName}
                                            onChangeText={text => setMedicineName(text)}></TextInput>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{ flex: 0.5, color: 'black' }}>Chi Tiết</Text>
                                        <TextInput
                                            style={styles.input}
                                            value={details}
                                            onChangeText={text => setDetails(text)}></TextInput>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{ flex: 0.5, color: 'black' }}>Thời gian</Text>
                                        <TextInput
                                            style={styles.input}
                                            value={time}
                                            onChangeText={text => setTime(text)}></TextInput>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#66B9BE',
                                        padding: 5,
                                        borderRadius: 5,
                                    }}
                                    onPress={() => {
                                        closeModalNhapThuoc();
                                    }}>
                                    <Text style={{ color: 'white' }}>Nhập</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalLichKham}
                    onRequestClose={closeModalLichKham}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <View
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Image source={require('../img/Group53.png')} />
                                </View>
                                <View
                                    style={{
                                        height: 1,
                                        backgroundColor: 'black',
                                        marginVertical: 5,
                                    }}
                                />
                                <View style={{ display: 'flex', flexDirection: 'column' }}>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{ flex: 0.5, color: 'black' }}>
                                            Nhập lịch khám
                                        </Text>
                                        <TextInput
                                            style={styles.input}
                                            value={medicineName}
                                            onChangeText={text => setMedicineName(text)}></TextInput>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{ flex: 0.5, color: 'black' }}>Chi Tiết</Text>
                                        <TextInput
                                            style={styles.input}
                                            value={details}
                                            onChangeText={text => setDetails(text)}></TextInput>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{ flex: 0.5, color: 'black' }}>Thời gian</Text>
                                        <TextInput
                                            style={styles.input}
                                            value={time}
                                            onChangeText={text => setTime(text)}></TextInput>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#66B9BE',
                                        padding: 5,
                                        borderRadius: 5,
                                    }}
                                    onPress={() => {
                                        closeModalLichKham();
                                    }}>
                                    <Text style={{ color: 'white' }}>Nhập</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={{ flex: 1 }}>
                    <View style={styles.headerContainer}>
                        <Image
                            source={require('../img/icon1.png')}
                            style={styles.headerImage}
                        />
                        <Text style={styles.headerText}>Bảo Ngọc</Text>
                    </View>

                    <View style={{ height: 150, backgroundColor: 'white' }}>
                        <Agenda
                            loadItemsForMonth={loadItems}
                            renderEmptyData={renderEmptyData}
                            onDayPress={handleDayPress} 
                            renderKnob={() => null}
                        />
                    </View>

                    <View style={styles.headerContainer2}>
                        <Text style={styles.headerText2}>Nhắc uống thuốc</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setmodalNhapThuoc(true);
                            }}>
                            <Ionicons name={'add-sharp'} color={'#525664'} size={25} />
                        </TouchableOpacity>
                    </View>
                    {dataUocThuoc.map(item => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.touchableOpacityStyle}
                            onPress={() => {
                                openItemModal(item);
                            }}>
                            <Image
                                source={require('../img/Group53.png')}
                                style={styles.imageStyle}
                            />
                            <View style={styles.verticalLine} />
                            <View style={styles.itemContent}>
                                <Text style={styles.itemText}>{item.title}</Text>
                                <Text style={styles.itemText}>{item.description}</Text>
                                <Text style={styles.itemText}>
                                    {formatTimeToAmPm(item.time)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                    <View style={styles.headerContainer2}>
                        <Text style={styles.headerText2}>Lịch Khám Sức Khoẻ</Text>
                        <TouchableOpacity onPress={() => setModalLichKham(true)}>
                            <Ionicons name={'add-sharp'} color={'#525664'} size={25} />
                        </TouchableOpacity>
                    </View>
                    {dataLichKham.map(item => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.touchableOpacityStyle}>
                            <Image
                                source={require('../img/Group53.png')}
                                style={styles.imageStyle}
                            />
                            <View style={styles.verticalLine} />
                            <View style={styles.itemContent}>
                                <Text style={styles.itemText}>{item.title}</Text>
                                <Text style={styles.itemText}>{item.description}</Text>
                                <Text style={styles.itemText}>
                                    {formatTimeToAmPm(item.day)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
         
        </SafeAreaView>
    );
};
export default Notification;
const styles = StyleSheet.create({
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#ECECEC',
        padding: 5,
        marginBottom: 5,
    },
    columnHeader: {
        color: 'black',
        flex: 1,
        fontWeight: 'bold',
    },
    tableRow: {
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
    },
    cell: {
        flex: 1,
    },
    input: {
        color: 'black',
        flex: 1,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        padding: 5,
        marginBottom: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'black', // Black text color
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#2196F3',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    touchableOpacityStyle: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 15,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageStyle: {
        // Styles for your image
    },
    verticalLine: {
        height: '100%',
        width: 1,
        backgroundColor: 'black',
        marginHorizontal: 10,
    },

    itemContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    itemText: {
        color: 'black',
        // Add more styling for text if needed
    },
    headerContainer2: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText2: {
        color: '#525664',
        fontSize: 22,
        fontWeight: '500',
    },
    headerContainer: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingHorizontal: 15,
        paddingBottom: 7,
        backgroundColor: '#67BCC1',
        alignItems: 'center',
    },

    headerImage: {
        // Add styles for your image if needed
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
        marginLeft: 10, // Added to space out the text from the image
    },

    itemText: {
        color: 'black',
    },
    agendaStyle: {},
    verticalLine: {
        height: '100%', // Adjust the height as needed
        width: 1, // This can be adjusted to increase the thickness of the line
        backgroundColor: 'black', // Set color of the line
        marginHorizontal: 10,
    },
});