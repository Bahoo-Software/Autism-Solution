import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Guide({ navigation }) {
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
          alignSelf: 'center',
          width: 100,
        }}
      >
        <Image
          style={{
            height: '100%',
            width: '100%',
            marginLeft: 13,
          }}
          source={require('../Images/Quide.png')}
        />
      </View>
      <View
        style={{
          height: '1%',
        }}
      />
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          alignSelf: 'center',
        }}
      >
        Guideline
      </Text>
      <View
        style={{
          padding: '4%',
          width: '100%',
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Note !
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </Text>
      </View>
    </View>
  )
}
