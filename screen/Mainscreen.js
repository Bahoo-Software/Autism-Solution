import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const Mainscreen = ({ navigation }) => {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          height: '4%',
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: '600',
          color: '#2D2D2D',
          textAlign: 'center',
        }}
      >
        WELCOME TO
      </Text>

      <Text
        style={{
          fontSize: 30,
          fontWeight: '600',
          color: '#2D2D2D',
          textAlign: 'center',
        }}
      >
        AUTISM SOLUTION
      </Text>
      <View
        style={{
          height: '20%',
        }}
      />
      <View
        style={{
          width: '100%',
          height: 181,

          alignItems: 'center',
        }}
      >
        <Pressable
          style={{
            width: 181,
            height: '100%',
          }}
          onPress={() => navigation.navigate('Stages')}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              borderRadius: 12,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.9,
              shadowRadius: 4.65,
              elevation: 8,
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                width: 80,
                height: 70,
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
                height: '10%',
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: 'black',


              }}
            >
              Stages Level
            </Text>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          height: '4%',
        }}
      />
      <View
        style={{
          height: '17%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Pressable onPress={() => navigation.navigate('Guide')}>
          <View
            style={{
              height: 160,
              width: 160,
              backgroundColor: 'white',
              borderRadius: 12,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.9,
              shadowRadius: 4.65,

              elevation: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                height: 60,
                width: 60,
              }}
            >
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  marginLeft: 10,
                }}
                source={require('../Images/Quide.png')}
              />
            </View>
            <View
              style={{
                height: '14%',
              }}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
              }}
            >
              Guideline
            </Text>
          </View>
        </Pressable>
        <View
          style={{
            width: '3%',
          }}
        />
        <Pressable

        onPress={() => navigation.navigate("Quz")}
        >
          <View
            style={{
              height: 160,
              width: 160,
              backgroundColor: 'white',
              borderRadius: 12,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.9,
              shadowRadius: 4.65,

              elevation: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                height: 60,
                width: 60,
              }}
            >
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                }}
                source={require('../Images/Quiz.png')}
              />
            </View>
            <View
              style={{
                height: '10%',
              }}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
              }}
            >
              Quiz
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}
export default Mainscreen
