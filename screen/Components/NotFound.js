import { View, Text } from 'react-native'
import React from 'react'

const NotFound = () => {
  return (
    <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <Text  style={{color:"red",fontSize:20}}> No practice at this time</Text>
    </View>
  )
}

export default NotFound