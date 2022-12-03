import { View, Text } from 'react-native'
import React from 'react'
import Backbtn from '../assets/Backbtn.svg'
const Quz = () => {
  return (
    <View  style={{flex:1,marginTop:10}}>
        <View style={{width:"53%",left:10,flexDirection:"row",justifyContent:"space-between"}}>
        <Backbtn />
            <Text  style={{fontSize:20,fontWeight:"bold",color:"#000000"}}>Quiz</Text>
        </View>
      {/* <Text>Quz</Text> */}
    </View>
  )
}

export default Quz