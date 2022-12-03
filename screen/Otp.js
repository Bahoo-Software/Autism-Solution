
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

import React, { Component } from "react";
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

import OTPTextView from "react-native-otp-textinput";
import LoginBtn from "../Components/Loginbtn";


const Otp=({navigation})=>{

  
  
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
          handleTextChange={(text) => console.log(text)}
          inputCount={4}
          keyboardType="numeric"

        />

     
        <TouchableOpacity
          //   style

          onPress={() => {
            // this.API1();
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

            navigation.navigate("Login2");
          }}
        >
          <LoginBtn
            color="# b"
            textcolor="#fff"
            textfontsize={18}
            name="Login"
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