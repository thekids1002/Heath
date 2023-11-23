import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/screen/HomeScreen";
import Notification from './src/screen/Notification';

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

const Screen3 = () => {
  return <View style={styles.screen3} />;
};

const Screen4 = () => {
  return <View style={styles.screen4} />;
};

export default function App() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Trang chủ':
        icon = 'home';
        break;
      case 'Tra cứu':
        icon = 'search';
        break;
      case 'Tài khoản':
        icon = 'person';
        break;
      case 'Nhắc nhở':
        icon = 'notifications';
        break;
    }

    return (
     <>
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? '#65B7BC' : '#969696'}
        
      />
      <Text style={{color : "black"}}>
        {routeName}
      </Text>
     </>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <CurvedBottomBar.Navigator screenOptions={{ headerShown: false }}
        type="UP"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="Trang chủ"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Click Action')}
            >
              <Image
                source={require('./src/img/logo.png')}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="Trang chủ"
          position="LEFT"
          component={() => <HomeScreen/>}
        />
        <CurvedBottomBar.Screen
          name="Tra cứu"
          component={() => <HomeScreen />}
          position="RIGHT"
        />


        <CurvedBottomBar.Screen
          name="Nhắc nhở"
          position="LEFT"
          component={() => <Notification />}
        />
        <CurvedBottomBar.Screen
          name="Tài khoản"
          component={() => <HomeScreen />}
          position="RIGHT"
        />

      </CurvedBottomBar.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    // shadowColor: '#DDDDDD',
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },

  imgCircle: {  
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },


  screen3: {
    flex: 1,
    backgroundColor: '#FCEBCD',
  },

  screen4: {
    flex: 1,
    backgroundColor: '#FFDBCD',
  },
  
});
