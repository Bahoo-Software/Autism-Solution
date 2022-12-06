import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import speakGreeting from '../Components/speakGreeting'
import Url from '../Url.json';
import axios from 'axios';
export default function Pronunciation({ navigation }) {
  const [Punctua,SetPunctua]=useState([])
  const GetData = () => {
    // var data = JSON.stringify({
    //   Category: 'ThreeWords',
    // });

    var config = {
      method: 'get',
      url: `${Url.baseurl}Product/${'Pronunciation'}`,
      headers: {
        'Content-Type': 'application/json',
      },
      // data: data,
    };

    axios(config)
      .then(function (response) {
        SetPunctua(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(() => {
    GetData();
  });
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          height: '5%',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          marginTop: '4%',
        }}
      >
        <View
          style={{
            width: '10%',
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back-ios"
              style={{
                marginLeft: '40%',
              }}
              size={30}
            />
          </Pressable>
        </View>
        <View
          style={{
            width: '26%',
          }}
        ></View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Pronunciation
        </Text>
      </View>
      <FlatList
        data={Punctua}
        style={{
          width: '100%',
          height: '100%',
          marginTop: '13%',
        }}
        renderItem={({ item, index }) => (
          <View>
            <Pressable onPress={() => {
              speakGreeting(item.Name);

            }}>
              <View
                style={{
                  marginBottom: 20,
                  width: '94%',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.9,
                  shadowRadius: 4.65,
                  elevation: 5,
                  backgroundColor: '#fff',
                  borderColor: '#523275',
                  alignSelf: 'center',

                  alignItems: 'center',
                  height: 58,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    width: '13%',
                    borderRadius: 8,
                    borderColor: '#523275',
                    borderWidth: 1,
                    height: '80%',
                    justifyContent: 'center',

                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#523275',
                    }}
                  >
                    {item.PronunSymbol}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    color: '#000000',
                  }}
                >
                  {item.Name}
                </Text>
                {/* <Speaker/> */}
                <View
                  style={{
                    width: '14%',
                    borderRadius: 8,
                    borderColor: '#523275',
                    height: '80%',
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                >
                  <Image
                    style={{
                      height: 31,
                      width: 31,
                    }}
                    source={require('../assets/Speaker.png')}
                  />
                </View>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  )
}
