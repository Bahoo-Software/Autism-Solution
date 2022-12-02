/** @format */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Keyboard
} from 'react-native';
import FormInput from '../Components/FormInput';
import LoginBtn from '../Components/Loginbtn';
import Entypo from 'react-native-vector-icons/Entypo';
import Loader from '../Components/Loader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Signup = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [username, setusername] = React.useState();
  const [btn,Setbtn]=useState(false)
  const [loading, setLoading] = useState(false);
  Keyboard.addListener('keyboardDidShow',()=>{
    Setbtn(true)
  })
  Keyboard.addListener('keyboardDidHide',()=>{
    Setbtn(false)
  })
  // const API = () => {
  //   // console.log(`This is Email:${email}`);

  //   if (!username) {
  //     alert("Please fill Email");
  //     return;
  //   }
  //   if (!password) {
  //     alert("Please fill Password");
  //     return;
  //   }

  //   // setLoading(true);
  //   console.log(`This is User:${username}`);
  //   console.log(`This is email:${email}`);
  //   console.log(`This is Password:${password}`);

  //   console.log(`This is phone:${phone}`);

  //   // console.log(`This is Number:${number}`);

  //   let data = {
  //     method: "POST",
  //     credentials: "same-origin",
  //     mode: "same-origin",
  //     body: JSON.stringify({
  //       username: username,
  //       password: password,
  //       phone: phone,
  //       email: email,
  //     }),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   fetch("https://lang-backend-api.herokuapp.com/", data)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       // setLoading(false);
  //       console.log(response);

  //       if (response === "success") {
  //         // navigation.navigate("Mainscreen");
  //         // console.log();
  //         navigation.navigate("Otp1", { phone: phone });
  //         alert("Please check your email ");
  //       } else if (response === "error") {
  //         alert("Please Enter Correct  Detail ");
  //         // console.log('');
  //       }
  //     }); // promise
  // };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginTop: 10,
          width: '90%',
          height: 30,
          alignSelf: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={30} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: '17%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 28,
            color: '#3E4A59',
            fontWeight: '800',
          }}>
          Get started now
        </Text>
        <View
          style={{
            height: '3%',
          }}
        />
      </View>
      <ScrollView  style={{flexGrow:1}}>
        <FormInput
          onChangeText={username => setuserName(username)}
          labelValue={username}
          placeholder="Username"
          autoCapitalize="none"
          autocorrect={false}
        />
        <FormInput
          onChangeText={value => setEmail(value)}
          labelValue={email}
          placeholder="Email"
          autoCapitalize="none"
          autocorrect={false}
        />

        <FormInput
          onChangeText={value => setPassword(value)}
          labelValue={password}
          placeholder="password"
          autoCapitalize="none"
          autocorrect={false}
        />
      </ScrollView>
      <View>{
        btn?null:
      <TouchableOpacity
          style={{
            width: "100%",
            height: 46,
            alignItems: "center",
          }}
          onPress={() => {
            // API();
          }}
        >
          <LoginBtn
            color="#0165FF"
            textcolor="#fff"
            textfontsize={23}
            name="Signup"
          />
        </TouchableOpacity>
}
        </View>
    </View>
  );
};

export default Signup;
