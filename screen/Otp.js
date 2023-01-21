
// /** @format */
// import React, { useState } from 'react'

// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   FlatList,
//   View,
//   Text,
//   ImageBackground,
//   StatusBar,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native'
// import FormInput from '../Components/FormInput'
// import LoginBtn from '../Components/Loginbtn'
// // import OtpInputs from 'react-native-otp-inputs';
// import OTPTextView from 'react-native-otp-textinput';
// const Otp = ({ navigation }) => {
//   const [email, setemail] = React.useState()
//   const [loading, setLoading] = useState(false)
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'white',
//         justifyContent:"space-between"
//       }}
//     >
//         <View
//         style={{
//           width: '95%',
//           height: 30,
//           alignSelf:"center",
//           marginTop:6
//         }}
//       >
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//             <MaterialIcons
//             name="arrow-back-ios"
           
            
//             size={30}
//             />
//           </TouchableOpacity>
//           <View
//           style={{alignItems:"center"}}
//           >
//             <Text style={{fontSize:19}}>Otp Varification</Text>
//           </View>
//       </View>
 
    
//       <View style={styles.container}>
//       <OTPTextView 
//       tintColor={"#0165FF"}
//       ref={e => (otpInput = e)} />
//       </View>
    
//         <TouchableOpacity
//           style={{
//             width: '100%',
//             height: 46,
//            bottom:30,
//             alignItems: 'center',
//           }}
//           onPress={() => {
//             // API();
//           }}
//         >
//           <LoginBtn
//             color="#0165FF"
//             textcolor="#fff"
//             textfontsize={23}
//             name="Next"
//           />
//         </TouchableOpacity>
//     </View>
//   )
// }

// export default Otp
// const styles = StyleSheet.create({
//     container: {
//     //   paddingTop: 50,
//     width:"90%",
//     alignSelf:"center"
//     },
//   });

import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import axios from "axios";
import OTPTextView from "react-native-otp-textinput";
import LoginBtn from "../Components/Loginbtn";
import Url from '../Url.json'
const Otp=({route,navigation})=>{
  const [SystemOtp,SetSystemOtp]=useState('')
  const [InputOtp,SetInputOtp]=useState('')
const {Email,username,password}=route.params
// console.log(Email);
const Signup=()=>{
var data = JSON.stringify({
  "email": Email,
  "username": username,
  "password": password
});

var config = {
  method: 'post',
  url: `${Url.baseurl}Signup`,
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
    alert("Something Went Wrong")
  }

})
.catch(function (error) {
  console.log(error);
});

}
const Send=()=>{
var data = JSON.stringify({
"email": Email
});

var config = {
method: 'post',
url: `${Url.baseurl}VarifyEmail`,
headers: { 
  'Content-Type': 'application/json'
},
data : data
};

axios(config)
.then(function (response) {
  console.log(response.data);
  if(response.data.status==false){
    alert("Please Try To connect this email :muhammadshiraz492@gmail.com")
  }else{

    SetSystemOtp(response.data.otp);
  }

// console.log(JSON.stringify(response.data));
})
.catch(function (error) {
console.log(error);
});

}
React.useEffect(()=>{
  Send()
},[])

 const onDone=()=>{
 if(SystemOtp==InputOtp){
  // alert("Sccuess")
  Signup()
 }else{
  alert("Please Enter Correct Otp")

 }
 }
  
    return (
        <>
         <View
        style={{
          width: '95%',
          height: 30,
          alignSelf:"center",
          marginTop:6,
          marginBottom:80
        }}
      >
      <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
            name="arrow-back-ios"
           
            
            size={30}
            />
          </TouchableOpacity>
          </View>
      <View style={styles.container}>
       

        <Text style={styles.instructions}>OTP Verification</Text>
        <OTPTextView
          ref={(e) => (this.input1 = e)}
          containerStyle={styles.textInputContainer}
          handleTextChange={(text) => SetInputOtp(text)}
          inputCount={4}
          tintColor={"#0165FF"}
          keyboardType="numeric"
          
          

        />

     
        <TouchableOpacity
          //   style

          onPress={() => {
            // this.API1();
            Send()
          }}
        >
          <View
            style={{
              width: "100%",
              // height:""
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#003399",
                paddingLeft: "5%",
              }}
            >
              Resend OTP
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: "60%",
          }}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            height: 46,
            alignItems: "center",
            bottom:70
          }}
          onPress={() => {
            // this.API();
            onDone()
            // navigation.navigate("Login2");
          }}
        >
          <LoginBtn
            color="#0165FF"
            textcolor="#fff"
            textfontsize={18}
            name="Next"
          />
        </TouchableOpacity>

      </View>
      </>
    );
  }

  export default Otp
  const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      width:"90%",
      alignSelf:'center',
      justifyContent:"center"
    },

    instructions: {
      fontSize: 30,
      fontWeight: "500",
      textAlign: "center",
      color: "#333333",
      marginBottom: 20,
    },
    textInputContainer: {
      marginBottom: 20,
    },
    roundedTextInput: {
      borderRadius: 10,
      borderWidth: 4,
    },
 
    textInput: {
      height: 40,
      width: "80%",
      borderColor: "#000",
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      letterSpacing: 5,
      marginBottom: 10,
      textAlign: "center",
    },
    buttonStyle: {
      marginHorizontal: 20,
    },
  });