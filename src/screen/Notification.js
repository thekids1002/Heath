import React, { useState } from 'react';
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
const Notification = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalNhapThuoc, setmodalNhapThuoc] = useState(false);

    const openModalNhapThuoc = () => setmodalNhapThuoc(true);
    const closeModalNhapThuoc = () => setmodalNhapThuoc(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

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

    const loadItems = day => {
        // Logic to load more items
    };

    //   const renderItem = item => {
    //     return (
    //       <View style={styles.itemContainer}>
    //         <Text style={styles.itemText}>{item.name}</Text>
    //       </View>
    //     );
    //   };
    const dataUocThuoc = [
        {
            id: '1',
            title: 'Hoạt Viết dưỡng não',
            description: '2 viên',
            day: '2023-11-23 11:00',
        },
        {
            id: '2',
            title: 'Hoạt Viết dưỡng não',
            description: '2 viên',
            day: '2023-11-23 11:00',
        },
        {
            id: '3',
            title: 'Hoạt Viết dưỡng não',
            description: '2 viên',
            day: '2023-11-23 11:00',
        },
    ];

    const dataLichKham = [
        {
            id: '1',
            title: 'Hoạt Viết dưỡng não',
            description: '2 viên',
            day: '2023-11-23 11:00',
        },
        {
            id: '2',
            title: 'Hoạt Viết dưỡng não',
            description: '2 viên',
            day: '2023-11-23 11:00',
        },
        {
            id: '3',
            title: 'Hoạt Viết dưỡng não',
            description: '2 viên',
            day: '2023-11-23 11:00',
        },
    ];

    const renderEmptyData = () => {
        return <View></View>;
    };

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
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                                        <Text style={{ flex: 0.5, color: 'black' }}>
                                            Nhập tên thuốc
                                        </Text>
                                        <TextInput style={styles.input}
                                            value={medicineName}
                                            onChangeText={text => setMedicineName(text)}
                                        ></TextInput>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                                        <Text style={{ flex: 0.5, color: 'black' }}>Chi Tiết</Text>
                                        <TextInput style={styles.input}
                                            value={details}
                                            onChangeText={text => setDetails(text)}></TextInput>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                                        <Text style={{ flex: 0.5, color: 'black' }}>Thời gian</Text>
                                        <TextInput style={styles.input}
                                            value={time}
                                            onChangeText={text => setTime(text)}

                                        ></TextInput>
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
                                    style={{ backgroundColor: "#66B9BE", padding: 5, borderRadius: 5 }}
                                    onPress={() => { closeModalNhapThuoc() }}
                                >
                                    <Text style={{ color: "white" }}>
                                        Nhập
                                    </Text>
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
                            onDayPress={day => { }}
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
                                setModalVisible(true);
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
                                    {formatTimeToAmPm(item.day)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                    <View style={styles.headerContainer2}>
                        <Text style={styles.headerText2}>Lịch Khám Sức Khoẻ</Text>
                        <TouchableOpacity onPress={() => Alert.alert('ok')}>
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
