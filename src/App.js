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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import EditProfile from './screens/EditProfile'
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
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
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
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name={'utensils'} size={20} color={color}/>;
          },
        }}
      />
      <BottomTab.Screen
        name="AllMenu"
        component={AllMenu}
        options={{
          headerShown: false,
          title: 'AllMenu',
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name={'list-alt'} size={20} color={color}/>;
          },
        }}
      />
      <BottomTab.Screen
        name="AddMenu"
        component={AddMenu}
        options={{
          headerShown: false,
          title: 'AddMenu',
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name={'plus-square'} size={20} color={color}/>;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name={'user'} size={20} color={color}/>;
          },
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
