import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.background}>
          <View style={styles.hello}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{paddingHorizontal: 20, fontSize: 15, paddingTop: 30}}>
                  Xin chào
                </Text>
                <Text style={{paddingHorizontal: 20, fontSize: 25}}>
                  Ngọc Như
                </Text>
              </View>
              <Image
                style={{
                  display: 'flex',
                  width: 80,
                  height: 80,
                  marginRight: 20,
                  marginTop: 15,
                }}
                source={require('../img/icon1.png')}></Image>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#79FFF7',
                margin: 15,
                borderRadius: 12,
              }}>
              <Text
                style={{
                  paddingLeft: 15,
                  paddingVertical: 15,
                  fontSize: 16,
                  maxWidth: '50%',
                  color: 'black',
                }}>
                Vào mùa mưa này hãy chú ý bảo vệ sức khoẻ nha Như !
              </Text>
              <Image
                style={{display: 'flex', marginRight: 40, marginTop: 15}}
                source={require('../img/Illustration1.png')}></Image>
            </View>
          </View>
        </View>

        <View
          style={{
            top: -100,

            backgroundColor: '#ffffff',
            marginHorizontal: 15,
            borderRadius: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
            padding: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'black'}}>Tính năng</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', marginRight: 5}}>View All</Text>
              <Ionicons
                name={'chevron-forward-circle'}
                color={'#969696'}
                size={25}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 20,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                width: 75,
                height: 100,
                backgroundColor: '#ffffff',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
                borderRadius: 20,
                overflow: 'visible',
                marginRight: 30,
              }}>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Image
                  source={require('../img/Group53.png')}
                  style={{
                    width: 70,
                    height: 70,
                    marginRight: -20,
                    marginTop: -20, // Adjust this value as needed to extend the image above the button
                  }}
                />
              </View>
              <Text
                style={{
                  flex: 1,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Nhắc uống thuốc
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 75,
                height: 100,
                backgroundColor: '#ffffff',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
                borderRadius: 20,
                overflow: 'visible',
                marginRight: 30,
              }}>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Image
                  source={require('../img/Group54.png')}
                  style={{
                    width: 70,
                    height: 70,
                    marginRight: -20,
                    marginTop: -20, // Adjust this value as needed to extend the image above the button
                  }}
                />
              </View>
              <Text
                style={{
                  flex: 1,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Nhắc lịch khám
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 75,
                height: 100,
                backgroundColor: '#ffffff',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
                borderRadius: 20,
                overflow: 'visible',
                marginRight: 30,
              }}>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Image
                  source={require('../img/Group55.png')}
                  style={{
                    width: 70,
                    height: 70,
                    marginRight: -20,
                    marginTop: -20, // Adjust this value as needed to extend the image above the button
                  }}
                />
              </View>
              <Text
                style={{
                  flex: 1,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Tìm thông tin của thuốc
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{top: -90, paddingHorizontal: 15}}>
          <Text style={{color: 'black', fontWeight: 500, fontSize: 20}}>
            Nhận khuyến cáo của các y
          </Text>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              top: -50,
              backgroundColor: '#ffffff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding : 10,
              marginBottom : 5
            }}>
            <Image
              source={require('../img/icondoctor1.png')}
              
            />
            <View style={{display:'flex', flexDirection : "column", padding : 20}}>
            <Text
              style={{
                flex: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left',
              }}>
              Bác sĩ Trang
            </Text>
            <Text
              style={{
                flex: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left',
              }}>
              Chuyên khoa chỉnh hình
            </Text>
            </View>
            <Text
              style={{
                flex: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              4.9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              top: -50,
              backgroundColor: '#ffffff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding : 10,
              marginBottom : 5
            }}>
            <Image
              source={require('../img/icondoctor1.png')}
              
            />
            <View style={{display:'flex', flexDirection : "column", padding : 20}}>
            <Text
              style={{
                flex: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left',
              }}>
              Bác sĩ Trang
            </Text>
            <Text
              style={{
                flex: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left',
              }}>
              Chuyên khoa chỉnh hình
            </Text>
            </View>
            <Text
              style={{
                flex: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              4.9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              top: -50,
              backgroundColor: '#ffffff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding : 10,
              marginBottom : 5
            }}>
            <Image
              source={require('../img/icondoctor1.png')}
              
            />
            <View style={{display:'flex', flexDirection : "column", padding : 20}}>
            <Text
              style={{
                flex: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left',
              }}>
              Bác sĩ Trang
            </Text>
            <Text
              style={{
                flex: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left',
              }}>
              Chuyên khoa chỉnh hình
            </Text>
            </View>
            <Text
              style={{
                flex: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              4.9
            </Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  background: {
    backgroundColor: '#67BCC1',
    height: 'auto',
    width: '100%',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    paddingBottom: 100,
  },
});
