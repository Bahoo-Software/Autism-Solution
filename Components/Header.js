import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default function Header({navigation},props) {
  return (
    <View
    style={{
        backgroundColor:"pink"
        ,height:"5%",
        alignItems:"center",
        flexDirection:"row",
        width:"100%"
        , marginTop:"4%"
    }}
    >
          <View
          
          style={{
            width:"10%",
          }}
          >

        <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
            name="arrow-back-ios"
            style={{
              marginLeft:"40%"
            }}
            size={30}
            />
          </TouchableOpacity>
            
          </View>
          <View
          style={{
            width:"10%",
          }}
          >

          </View>
          <Text>{props.name}</Text>
    </View>
  )
}