import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Stack = createStackNavigator();

function Profile() {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [docNum, setDocNum] = useState('');
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('')
  // const getUser = async () => {
  //   const userDocument = await firestore().collection("users").
  //   doc('2TPLmvIzSFk6eaPuv6PJ').get()
  //   console.log(userDocument);
  //   setName(userDocument.data().name)
  // }
  const getCurrentUser = () => {
    const user = auth().currentUser;
    console.log(user);
  }

  const getDetail = () => {
    const subscriber =
      firestore()
        .collection("users")
        .where('mail', '==', auth()?.currentUser.email)//.where('ingredients', '==', ['rice','egg','pork'])
        .onSnapshot(doc => {
          if (doc) {
            console.log('doc not null')
            // let food = []
            doc.forEach(doc => {
              if (doc.exists) {
                console.log('this doc exists')
              }
              console.log(doc.data())
              // food.push(doc.data())
              setDocNum(doc.ref._documentPath._parts[1])
              // console.log(doc.ref._documentPath._parts[1])
              setUser(doc.data())
            })
            // setFoods(food)
          }
        })
  }

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  const onPressLogOutHandle = () => {
    signOut();
    navigation.replace('Login');
  }

  const BackButton = () => {
    return (
        <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
                navigation.navigate('EditProfile')
            }}
        >
            <FontAwesome5 name={'edit'} size={25} color={'#ffffff'} />
        </TouchableOpacity>
    )
}

  useEffect(() => {
    // getUser();
    // getCurrentUser();
    getDetail()
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <BackButton/>
      <View>
        {/* <View style={styles.cameraIcon}>
          <TouchableOpacity>
            <FontAwesome5 name={'camera'} size={15} color={'white'} />
          </TouchableOpacity>
        </View> */}
        <Image
          style={styles.profilePicture}
          resizeMode="cover"
          source={{
            uri: user?.pictureUrl
          }}
        />
      </View>

      <Text style={styles.textHeader}>
        {user.name}
      </Text>
      <Text style={styles.textMail}>
        {auth()?.currentUser.email}
      </Text>

      <TouchableOpacity
        onPress={() => { onPressLogOutHandle() }}
      >
        <Text style={styles.textStart}>log out</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
    flex: 1,
    //   justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  textHeader: {
    margin: 10,
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'DancingScript-Regular'
  },
  textMail: {
    marginBottom: 10,
  },
  textStart: {
    fontSize: 20,
    color: '#FF8C10',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
    margin: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 100,
    // overflow: "hidden",
    elevation: 5,
  },
  cameraIcon: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#FF8C10',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    zIndex: 3, // works on ios
    elevation: 6, // works on android
  },
  backButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF8C10',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    elevation: 5,
  },
});

export default Profile;