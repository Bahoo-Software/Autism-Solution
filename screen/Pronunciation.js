import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import * as Speech from "expo-speech";

export default function Pronunciation({ navigation }) {
  const Punctua = [
    {
      barket: '< >',
      name: 'Angular Bracket',
    },
    {
      barket: '< >',
      name: 'Angular Bracket',
    },
    {
      barket: '< >',
      name: 'Angular Bracket',
    },
    {
      barket: '< >',
      name: 'Angular Bracket',
    },
    {
      barket: '< >',
      name: 'Angular Bracket',
    },
    {
      barket: '< >',
      name: 'Angular Bracket',
    },
    {
      barket: '< >',
      name: 'Angular Bracket',
    },
    {
      barket: '< >',
      name: 'Angular Bracket',
    },
  ]
  const speakGreeting = (item) => {
    const greeting = `${item}`;
    const options = {
      voice: "com.apple.speech.synthesis.voice.Fred",
      pitch: 1.5,
      rate: 0.7,
    };

    // Speech.speak(greeting, options);
  };
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
              speakGreeting(item.name);

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
                      fontSize: 20,
                      color: '#523275',
                    }}
                  >
                    {item.barket}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 20,
                    color: '#000000',
                  }}
                >
                  {item.name}
                </Text>
                {/* <Speaker/> */}
                <View
                  style={{
                    width: '14%',
                    borderRadius: 8,
                    borderColor: '#523275',
                    height: '80%',
                  }}
                >
                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
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
