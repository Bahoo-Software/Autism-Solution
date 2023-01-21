import { View, Text, FlatList, TouchableOpacity, Pressable } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// const Stage = [
//   {
//     name: 'Pronunciation',
//     nav: 'Pronunciation',
//   },
//   {
//     name: 'Vocalization',
//     nav: 'Vocalization',
//   },
  
//   {
//     name: 'Two Or three Words',
//     nav: 'Twothreeword',
//             // height:"100%"
//   },
//   {
//     name: 'Sentence between 5 words',
//     nav: 'Sentencebetweenfiveword',
//   },
// ]
const StagesList = ({ Stage, }) => {
  const navigation=useNavigation()
  // const {Stage}
  const [select, setSelect] = React.useState('')
  React.useEffect(()=>{
    navigation.addListener('focus',()=>{
      setSelect('')
    })
  },[])
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          height: '3%',
        }}
      />
      <View
      
      >
        <FlatList
          data={Stage}
          style={{
            width: '100%',
            height: '100%',
          }}
          renderItem={({ item, index }) => (
            <View>
              <Pressable
                style={{
                  marginBottom: 10,
                }}
                onPress={() => {
                  setSelect(index)
                  navigation.navigate(item.nav)
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
                    backgroundColor: index == select ? '#523275' : 'white',
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
                        flexDirection: 'row',
                        width: '70%',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: index == select ? 'white' : '#523275',
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
                          fontSize: 16,
                          color: index == select ? 'white' : 'black',
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '30%',
                        alignItems: 'flex-end',
                      }}
                    >
                      <MaterialIcons
                        name="arrow-forward-ios"
                        size={24}
                        style={{
                          marginRight: -10,
                        }}
                        color={index == select ? 'white' : '#523275'}
                      />
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default StagesList
