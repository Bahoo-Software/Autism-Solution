/** @format */
import React, { useState } from 'react'

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
  Dimensions,
} from 'react-native'
import FormInput from '../Components/FormInput'
import LoginBtn from '../Components/Loginbtn'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Forget = ({ navigation }) => {
  const [email, setemail] = React.useState()
  const [loading, setLoading] = useState(false)

  // const API = () => {
  //   console.log(`This is Email:${email}`);

  //   let data = {
  //     method: "POST",
  //     credentials: "same-origin",
  //     mode: "same-origin",
  //     body: JSON.stringify({
  //       email: email,
  //     }),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   fetch("https://lang-backend-api.herokuapp.com/check_email/", data)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setLoading(false);
  //       console.log(response);
  //       // response.filter((e) => {
  //       //   console.log(e);
  //       // });
  //       // console.log(response.sucess);

  //       if (response === "success") {
  //         // console.log(responseJson);
  //         // navigation.('DrawerNavigationRoutes');
  //         navigation.navigate("Otp", { email });
  //       } else if (response === "error") {
  //         alert("Please check your OTP id or password");
  //         // console.log('');
  //       }
  //     }); // pr

  //   // .then((error) => console.log(error));
  //   // navigation.navigate("Bookselection", { userName });
  // };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          height: '2%',
        }}
      />
      <View
        style={{
          width: '95%',

          paddingLeft: '3%',
          height: 30,
        }}
      >
      <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
            name="arrow-back-ios"
            style={{
              marginLeft:"3%"
            }}
            size={30}
            />
          </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: '9%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 28,
            color: '#3E4A59',
            fontWeight: '800',
          }}
        >
          Forgot Password?
        </Text>
     
       
      </View>

      <View
        style={{
          height: '7%',
        }}
      />
      <View
        style={{
          height: '73%',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <FormInput
          onChangeText={(useremail) => setemail(useremail)}
          labelValue={email}
          placeholder="email"
          autoCapitalize="none"
          autocorrect={false}
        />

        <View
          style={{
            height: '24%',
          }}
        />
        <TouchableOpacity
          style={{
            width: '100%',
            height: 46,
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
          }}
          onPress={() => {
            // API();
          }}
        >
          <LoginBtn
            color="#0165FF"
            textcolor="#fff"
            textfontsize={23}
            name="Next"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Forget
