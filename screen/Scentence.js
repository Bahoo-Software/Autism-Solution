// import { View, Text } from 'react-native'
// import React from 'react'

// const Scentence = () => {
//   return (
//     <View>
//       <Text>Scentence</Text>
//     </View>
//   )
// }

// export default Scentence
// import {View, Text, Pressable, Image, FlatList, Dimensions} from 'react-native';
// import React, {useState} from 'react';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import LoginBtn from '../Components/Loginbtn';
// import VoiceIcon from '../assets/Vector.svg';

// import VoiceILiseningVectorcon from '../assets/LiseningVector.svg';
// import Voice, {
//   SpeechRecognizedEvent,
//   SpeechResultsEvent,
//   SpeechErrorEvent,
// } from '@react-native-voice/voice';
// import speakGreeting from '../Components/speakGreeting';
// const Vocalization = ({navigation}) => {
//   const [StartRecord, SetStart] = useState(false);
//   const [Correct,Setcorrect]=useState(false)
//   const width=Dimensions.get('screen').width
//   const Data=[1,2,3]
//   React.useEffect(() => {
//     Voice.onSpeechStart = onSpeechStartHandler;
//     Voice.onSpeechEnd = onSpeechEndHandler;
//     Voice.onSpeechResults = onSpeechResultsHandler;

//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     };
//   }, []);
//   const onSpeechStartHandler = e => {
//     // console.log('start handler==>>>', e);
//   };
//   const onSpeechEndHandler = e => {
//     console.log('stop handler', e);
//     SetStart(false);
//   };

//   const onSpeechResultsHandler = e => {
//     let text = e.value[0];
//     // setResult(text);
//     console.log(text.split(" "));
//   const value=text.split(" ")[0];
//     console.log(value.toUpperCase());
//     if("MANGO"==value.toUpperCase()){
//         // alert("Correct")
//         Setcorrect(true)
//     }else{
//       alert("your Voice is not recongize")
//     }
//     // console.log('speech result handler', e);
//   };

//   const startRecording = async () => {
//     // setLoading(true)
//     try {
//       await Voice.start('en-Us');
//     } catch (error) {
//       console.log('error raised', error);
//     }
//   };
//   const OnStartRecord = () => {
//     console.log('Start');
//     SetStart(true);
//     startRecording();
//   };
//   const OnStopRecord = () => {
//     console.log('Stop');
//     SetStart(false);
//     Voice.stop();
//   };
//   return (
//     <View
//       style={{
//         flex: 1,
//         paddingTop: 10,
//         backgroundColor: '#fff',
//       }}>
//    <FlatList 
//     data={Date}
//     horizontal
//     pagingEnabled
//    renderItem={({item})=>(
//     <View>
//     <View
//     style={{
//       width:width-20,
//       alignSelf: 'center',
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
      
//     }}>
//     <Pressable onPress={() => navigation.goBack()}>
//       <MaterialIcons name="arrow-back-ios" size={30} />
//     </Pressable>
//     <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
//       Vocalization
//     </Text>
//     <Pressable
//       style={{
//         borderRadius: 8,
//         borderColor: '#523275',
//         justifyContent: 'center',
//         alignItems: 'center',
//         left:5
//       }}
//       onPress={() => speakGreeting('Mango')}>
//       <Image
//         style={{
//           height: 31,
//           width: 30,
//         }}
//         source={require('../assets/Speaker.png')}
//       />
//     </Pressable>
//   </View>
//   <View
//     style={{
//       flexGrow: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: width,
//     }}>
//     <View style={{justifyContent: 'center'}}>
//       <Image source={require('../assets/mango.png')} />
//     </View>
//     <View style={{height: 130, justifyContent: 'center'}}>
//       <Pressable onPress={StartRecord ? OnStopRecord : OnStartRecord}>
//         {StartRecord ? <VoiceILiseningVectorcon /> : <VoiceIcon />}
//       </Pressable>
//     </View>
//     <Pressable
//       style={{
//         width: '100%',
//         height: 46,
//         alignItems: 'center',
//         top: 60,
//       }}
//       onPress={{}}>
//       <LoginBtn
//         color={Correct?"#523275":"#8B8080"}
//         textcolor={Correct?"#fff":"#000"}
//         textfontsize={18}
//         name="Next"
//       />
//     </Pressable>
//   </View>
//   </View>
//    )}
//    />
//     </View>
//   );
// };

// export default Vocalization;
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import StagesList from "../Components/StagesList";

export default function Scentence({ navigation }) {

const Stage = [
  {
    name: 'Two Words',
    nav: 'TwoWords',
  },
  {
    name: 'Three Words',
    nav: 'ThreeWords',
  },
  
  {
    name: 'Greater Scentence',
    nav: 'GreaterScentence',
            // height:"100%"
  },
 
]
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
          height: 100,
          alignSelf:"center",
          width: 100,
        }}
      >
     
      </View>

      <StagesList  Stage={Stage} navigation={navigation} />

    </View>
  )
}
