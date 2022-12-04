/** @format */
import React, { useState } from 'react'
// import ax
import { Image, View, Text, ScrollView,TouchableOpacity } from 'react-native'
import FormInput from '../Components/FormInput'
import axios from 'axios'
import LoginBtn from '../Components/Loginbtn'
import Url from '../Url.json'
const Login = ({ navigation }) => {
  const [username, setuserName] = React.useState()
  const [password, setPassword] = React.useState()
  const [loading, setLoading] = useState(false)
  const [errortext, setErrortext] = useState('')
  //   const API = () => {
  //     // console.log(`This is Email:${email}`);
  //     if (!username) {
  //       alert("Please fill Email");
  //       return;
  //     }
  //     if (!password) {
  //       alert("Please fill Password");
  //       return;
  //     }

  //     setLoading(true);
  //     console.log(`This is Password:${password}`);
  //     console.log(`This is User:${username}`);
  //     // console.log(`This is Number:${number}`);

  //     let data = {
  //       //cxzbzbxj

  //       method: "POST",
  //       credentials: "same-origin",
  //       mode: "same-origin",
  //       body: JSON.stringify({
  //         username: username,
  //         password: password,
  //       }),
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     fetch("https://lang-backend-api.herokuapp.com/signin/", data)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         setLoading(false);
  //         console.log(response);
  //         if (response === "success") {
  //           navigation.replace("Bookselection");
  //         } else if (response === "error") {
  //           alert("Please check your email id or password");
  //         }
  //       });
  //   };
  const Log=()=>{
    var data = JSON.stringify({
      "email":username,
      "password": password
    });
    
    var config = {
      method: 'post',
      url: `${Url.baseurl}Login`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      if(response.data.status==true){
        navigation.navigate("Mainscreen")
      }else{
        alert("Something went wrong")
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  return (
    <ScrollView>
    

    <View
      style={{
        // flex: 1,
        height:765, 
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          // height: '2%',
        }}
      />
      <View
        style={{
          width: '95%',

          paddingLeft: '3%',
          height: 30,
        }}
      ></View>
      <View
        style={{
          width: '100%',
          height: '14%',

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
          Login Now
        </Text>
        <View
          style={{
            height: '3%',
          }}
        />
      </View>
      <View
        style={{
          height: '3%',
        }}
      />
      <View
        style={{
          width: '54%',
          height: 200,
          alignSelf: 'center',
        }}
      >
        <Image
          style={{
            height: '100%',
            width: '100%',
          }}
          source={require('../Images/Login.png')}
        />
      </View>
      <View
        style={{
          height: '7%',
        }}
      />
      <View
        style={{
          height: '35%',

          alignItems: 'center',
          width: '100%',
        }}
      >
        <FormInput
          // style={styles.input}
          onChangeText={(username) => setuserName(username)}
          // value={text}
          labelValue={username}
          // secureTextEntry={true}
          // keyboardType="email-address"
          placeholder="Email"
          autoCapitalize="none"
          autocorrect={false}
        />
        <FormInput
          // style={styles.input}
          onChangeText={(userPassword) => setPassword(userPassword)}
          // value={text}
          labelValue={password}
          // secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity
          style={{
            height: 20,
            width: '85%',
          }}
          onPress={() => navigation.navigate('Forget')}
        >
          <View
            style={{
              height: 20,
              // width: "85%",
              // backgroundColor: "pink",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: '#003399',
                position: 'absolute',
                right: 0,
              }}
            >
              Forgot password?
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: '24%',
          }}
        />
        <TouchableOpacity
          style={{
            width: '100%',
            height: 46,
            alignItems: 'center',
          }}
          onPress={() => {
            Log()
            // navigation.navigate('Mainscreen')
          }}
        >
          <LoginBtn
            color="#0165FF"
            textcolor="#fff"
            textfontsize={23}
            name="Login"
          />
        </TouchableOpacity>
       
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text
          style={{
            fontSize: 15,
            color: '#0165FF',
            marginTop: '4%',
            alignSelf: 'center',
          }}
        > 
          Are you new? Create Acoount
        </Text>
      </TouchableOpacity>
      </View>

    </View>
    </ScrollView>

  )
}

export default Login