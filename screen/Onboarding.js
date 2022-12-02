import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import LoginBtn from '../Components/Loginbtn'

export default function Onboarding({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          height: '10%',
          width: '100%',
          marginTop: '10%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: '#0165FF',
            fontWeight: '900',
            marginRight: '1%',
          }}
        >
          AUTISM
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: '#2D2D2D',
            fontWeight: '900',
          }}
        >
          SOLUTION{' '}
        </Text>
      </View>
      <View
        style={{
          height: '20%',
        }}
      />
      <View
        style={{
          width: '90%',
          height: '23%',
          alignSelf: 'center',
        }}
      >
        <Image
          style={{
            height: '100%',
            width: '100%',
          }}
          source={require('../assets/Onboarding.png')}
        />
      </View>
      <View
        style={{
          height: '29%',
        }}
      />
      <Pressable
        style={{
          width: '100%',
          height: 46,
          alignItems: 'center',
        }}
        onPress={() => {
          
          navigation.navigate("Login");
        }}
      >
        <LoginBtn
          color="#0165FF"
          textcolor="#fff"
          textfontsize={18}
          name="Start"
        />
      </Pressable>
    </View>
  )
}
