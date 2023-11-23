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
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Notification = () => {
    const [items, setItems] = useState({
        '2023-11-22': [{ name: 'Meeting with team', details: '', time: '' }],
        '2023-11-23': [{ name: 'Doctor appointment', details: '', time: '' }],
        '2023-11-23': [{ name: 'Doctor appointment', details: '', time: '' }],
        '2023-11-23': [{ name: 'Doctor appointment', details: '', time: '' }],
        '2023-11-23': [{ name: 'Doctor appointment', details: '', time: '' }],
        '2023-11-23': [{ name: 'Doctor appointment', details: '', time: '' }]
    });

    const formatTimeToAmPm = (dateString) => {
        const date = new Date(dateString);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;

        return hours + ':' + minutesStr + ' ' + ampm;
    };
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
    const data = [
        { id: '1', title: 'Hoạt Viết dưỡng não', description: "2 viên", day: "2023-11-23 11:00" },
    ];

    const renderEmptyData = () => {
        return <View></View>;
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{
            display: 'flex', flexDirection: 'row', marginVertical: 5, marginHorizontal: 15, backgroundColor: "white", padding: 10, borderRadius: 10, shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        }}>
            <Image source={require("../img/Group53.png")} />
            <View style={styles.verticalLine} />
            <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ color: "black" }}>
                    {item.title}
                </Text>
                <Text style={{ color: "black" }}>
                    {item.description}
                </Text>
            </View>
            <View style={{ display: "flex", justifyContent: "flex-end", alignItems: 'center' }}>
                <Text style={{ color: "black" }}>
                    {formatTimeToAmPm(item.time)}
                </Text>
            </View>
        </TouchableOpacity>
    );


    const Header = () => (
        <View>
           
            <View style={styles.headerContainer2}>
                <Text style={styles.headerText2}>Nhắc uống thuốc</Text>
                <TouchableOpacity onPress={() => Alert.alert('ok')}>
                    <Ionicons name={'add-sharp'} color={'#525664'} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
    const Header2 = () => (
        <View>
           
            <View style={styles.headerContainer2}>
                <Text style={styles.headerText2}>Lịch Khám Sức Khoẻ</Text>
                <TouchableOpacity onPress={() => Alert.alert('ok')}>
                    <Ionicons name={'add-sharp'} color={'#525664'} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );


    return (

        <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <Image
                    source={require('../img/icon1.png')}
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>Bảo Ngọc</Text>
            </View>

            <View style={{  height: 150, backgroundColor: 'white' }}>
                <Agenda
                    loadItemsForMonth={loadItems}
                    renderEmptyData={renderEmptyData}
                    onDayPress={day => {
                        // Alert.alert('Ngày đã chọn', JSON.stringify(day));
                    }}
                    renderKnob={() => null}
                />
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={Header}
                // If you have footer content, use ListFooterComponent here
            /> 
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={Header2}
                // If you have footer content, use ListFooterComponent here
            /> 
        </View>

    );
};

export default Notification;

const styles = StyleSheet.create({

    headerContainer2: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
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
    agendaStyle: {

    },
    verticalLine: {
        height: '100%', // Adjust the height as needed
        width: 1, // This can be adjusted to increase the thickness of the line
        backgroundColor: 'black', // Set color of the line
        marginHorizontal: 10,
    },
});
