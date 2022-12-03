
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
// import OtpInputs from 'react-native-otp-inputs';
import OTPTextView from 'react-native-otp-textinput';
const Otp = ({ navigation }) => {
  const [email, setemail] = React.useState()
  const [loading, setLoading] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent:"space-between"
      }}
    >
        <View
        style={{
          width: '95%',
          height: 30,
          alignSelf:"center",
          marginTop:6
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
      <OTPTextView 
      tintColor={"#0165FF"}
      ref={e => (otpInput = e)} />
      </View>
    
        <TouchableOpacity
          style={{
            width: '100%',
            height: 46,
           bottom:30,
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
  )
}

export default Otp
const styles = StyleSheet.create({
    container: {
    //   paddingTop: 50,
    width:"90%",
    alignSelf:"center"
    },
  });