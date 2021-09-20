/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

firestore()
  .collection('users')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });

const Stack = createStackNavigator();

function ScreenA() {
  return (
    <View>
      <Text>
        ScreenA
      </Text>
    </View>
  );
}

function App () {
  return (
    // <SafeAreaView>
    //   <FontAwesome5 name={'comments'} size={100} color='red'/>
    //   <Text>hello world3</Text>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Screen_A"
          component={ScreenA}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
