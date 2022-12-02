import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import StagesList from "../Components/StagesList";

export default function Stages({ navigation }) {
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
          width: '100%',

          paddingLeft: '3%',
          height: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            style={{
              marginLeft: '3%',
            }}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 100,
          alignSelf:"center",
          width: 100,
        }}
      >
        <Image
          style={{
            height: '100%',
            width: '100%',
          }}
          source={require('../Images/Stages.png')}
        />
      </View>
      <View
        style={{
          height: '1%',
        }}
      />
      <Text
        style={{
            fontWeight:"bold",
          fontSize: 18,
          color: 'black',
          alignSelf:"center",

        }}
      >
        Stages Level
      </Text>
      <StagesList navigation={navigation} />

    </View>
  )
}
