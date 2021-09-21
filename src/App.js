// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import firestore from '@react-native-firebase/firestore';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// firestore()
//   .collection('users')
//   .get()
//   .then(querySnapshot => {
//     console.log('Total users: ', querySnapshot.size);

//     querySnapshot.forEach(documentSnapshot => {
//       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//     });
//   });

// const Stack = createStackNavigator();

// function ScreenA() {
//   return (
//     <View>
//       <Text>
//         ScreenA
//       </Text>
//     </View>
//   );
// }

// function App () {
//   return (
//     // <SafeAreaView>
//     //   <FontAwesome5 name={'comments'} size={100} color='red'/>
//     //   <Text>hello world3</Text>
//     // </SafeAreaView>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen 
//           name="Screen_A"
//           component={ScreenA}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React , {useCallback, useEffect, useRef, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Home from './screens/Home'
import Menu from './screens/Menu'
import AllMenu from './screens/AllMenu'
import AddMenu from './screens/AddMenu'
import Detail from './screens/Detail'
import UpdateDetail from './screens/UpdateDetail'
import PutIngredient from './screens/PutIngredient'
import Profile from './screens/Profile'
// import Login from './screens/Login'

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function App(){
  return(
    // <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PutIngredient"
          component={PutIngredient}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UpdateDetail"
          component={UpdateDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  )
}

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      // screenOptions={{
      //   tabBarVisible: true,
      // }}
      initialRouteName={PutIngredient}
      headerMode="none"
      screenOptions={{
        tabBarVisible: true,
        showIcon: true,
        showLabel: true,
        activeTintColor: '#FF8C10',//colors.primary,
        // inactiveTintColor: BaseColor.grayColor,
        style: {
          // backgroundColor: BaseColor.whiteColor,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        labelStyle: {
          fontSize: 12,
          fontWeight: '600',
          // fontFamily: font,
        },
      }}>
      <BottomTab.Screen
        name="PutIngredient"
        component={PutIngredient}
        options={{
          headerShown: false,
          title: 'PutIngredient',
          // tabBarIcon: ({color}) => {
          //   return <Icon color={color} name="building" size={20} solid />;
          // },
        }}
      />
      <BottomTab.Screen
        name="AllMenu"
        component={AllMenu}
        options={{
          headerShown: false,
          title: 'AllMenu',
          // tabBarIcon: ({color}) => {
          //   return <Icon color={color} name="receipt" size={20} solid />;
          // },
        }}
      />
      <BottomTab.Screen
        name="AddMenu"
        component={AddMenu}
        options={{
          headerShown: false,
          title: 'AddMenu',
          // tabBarIcon: ({color}) => {
          //   return <Icon color={color} name="receipt" size={20} solid />;
          // },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: 'Profile',
          // tabBarIcon: ({color}) => {
          //   return <Icon color={color} name="receipt" size={20} solid />;
          // },
        }}
      />
      {/* <BottomTab.Screen
        name="My Pass"
        component={login ? MyPass : SignInWithPhone}
        initialParams={{showRenderLeft: false}}
        options={{
          title: t('navigation_bottom_tab_my_pass'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="qrcode" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={login ? Profile : SignInWithPhone}
        options={{
          title: t('navigation_bottom_tab_account'),
          tabBarIcon: ({color}) => {
            return <Icon solid color={color} name="user-circle" size={20} />;
          },
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
