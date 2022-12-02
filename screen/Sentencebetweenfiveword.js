
import { View, Text, Pressable, FlatList , Image} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import * as Speech from "expo-speech";

export default function Sentencebetweenfiveword({navigation}) {

  const Two = [
    {
    
      name: 'I will wait for you.',
    },
    {
    
      name:"Will they go with you?"
    },
    {
     
      name: 'I will wait for you.',
    },
    {
 
      name: 'Will they go with you?',
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
      flex:1,
      backgroundColor:"#fff"
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
            width: '15%',
          }}
        ></View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
         Sentence between 5 Words
        </Text>
      </View>
      <FlatList
          data={Two}
          style={{
            width: '100%',
            height: '100%',
            marginTop:"7%"
          }}
          renderItem={({ item, index }) => (
            <View>
              <Pressable
                style={{
                  marginBottom: 10,
                }}
                onPress={() => {
                  speakGreeting(item.name);
    
                }}
              >
                <View
                  style={{
                    marginBottom: 10,
                  }}
                />
                <View
                  style={{
                    width: '94%',
                    backgroundColor:  '#fff',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                    },
                    shadowOpacity: 0.9,
                    shadowRadius: 4.65,
                    elevation: 5,
                    alignSelf: 'center',
                    height: 58,
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      width: '94%',
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}
                    >
                    <View
                      style={{
                        alignItems:"center",
                        flexDirection: 'row',
                        width: '80%',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color:  '#523275',
                        }}
                      >
                        {index + 1}.
                      </Text>
                      <View
                        style={{
                          width: '6%',
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          color:  'black',
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '20%',
                        alignItems: 'flex-end',
                      }}
                    >
                     <View
                  style={{
                    width: '60%',
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
                  </View>
                </View>
              </Pressable>
            </View>
          )}
        />
    </View>
  )
}