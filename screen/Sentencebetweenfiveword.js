
// import { View, Text, Pressable, FlatList , Image} from 'react-native'
// import React,{useState} from 'react'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import speakGreeting from '../Components/speakGreeting'
// // import * as Speech from "expo-speech";
// import Url from '../Url.json';
// import axios from 'axios';
// export default function Sentencebetweenfiveword({navigation}) {

//   const  [Two,SetTwo]=useState([]);

//   const GetData = () => {
//     // var data = JSON.stringify({
//     //   Category: 'ThreeWords',
//     // });

//     var config = {
//       method: 'get',
//       url: `${Url.baseurl}Product/${'FiveSentence'}`,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // data: data,
//     };

//     axios(config)
//       .then(function (response) {
//         SetTwo(response.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   React.useEffect(() => {
//     GetData();
//   },[]);
//   return (
//     <View
//     style={{
//       flex:1,
//       backgroundColor:"#fff"
//     }}
    
//     >
//      <View
//         style={{
//           height: '5%',
//           alignItems: 'center',
//           flexDirection: 'row',
//           width: '100%',
//           marginTop: '4%',
//         }}
//       >
//         <View
//           style={{
//             width: '10%',
//           }}
//         >
//           <Pressable onPress={() => navigation.goBack()}>
//             <MaterialIcons
//               name="arrow-back-ios"
//               style={{
//                 marginLeft: '40%',
//               }}
//               size={30}
//             />
//           </Pressable>
//         </View>
//         <View
//           style={{
//             width: '15%',
//           }}
//         ></View>
//         <Text
//           style={{
//             fontSize: 18,
//             fontWeight: 'bold',
//           }}
//         >
//          Sentence between 5 Words
//         </Text>
//       </View>
//       <FlatList
//           data={Two}
//           style={{
//             width: '100%',
//             height: '100%',
//             marginTop:"7%"
//           }}
//           renderItem={({ item, index }) => (
//             <View>
//               <Pressable
//                 style={{
//                   marginBottom: 10,
//                 }}
//                 onPress={() => {
//                   speakGreeting(item.Name);
    
//                 }}
//               >
//                 <View
//                   style={{
//                     marginBottom: 10,
//                   }}
//                 />
//                 <View
//                   style={{
//                     width: '94%',
//                     backgroundColor:  '#fff',
//                     shadowColor: '#000',
//                     shadowOffset: {
//                       width: 0,
//                     },
//                     shadowOpacity: 0.9,
//                     shadowRadius: 4.65,
//                     elevation: 5,
//                     alignSelf: 'center',
//                     height: 58,
//                     justifyContent: 'center',
//                     borderRadius: 10,
//                   }}
//                 >
//                   <View
//                     style={{
//                       width: '94%',
//                       alignSelf: 'center',
//                       flexDirection: 'row',
//                     }}
//                     >
//                     <View
//                       style={{
//                         alignItems:"center",
//                         flexDirection: 'row',
//                         width: '80%',
//                       }}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 20,
//                           color:  '#523275',
//                         }}
//                       >
//                         {index + 1}.
//                       </Text>
//                       <View
//                         style={{
//                           width: '6%',
//                         }}
//                       />
//                       <Text
//                         style={{
//                           fontSize: 20,
//                           color:  'black',
//                         }}
//                       >
//                         {item.Name}
//                       </Text>
//                     </View>

//                     <View
//                       style={{
//                         width: '20%',
//                         alignItems: 'flex-end',
//                       }}
//                     >
//                      <View
//                   style={{
//                     width: '60%',
//                     borderRadius: 8,
//                     borderColor: '#523275',
//                     height: '80%',
//                     justifyContent:"center",
//                     alignItems:"center"
//                   }}
//                 >
//                   <Image
//                     style={{
//                       height: 31,
//                       width: 30,
//                     }}
//                     source={require('../assets/Speaker.png')}
//                   />
//                 </View>
//                     </View>
//                   </View>
//                 </View>
//               </Pressable>
//             </View>
//           )}
//         />
//     </View>
//   )
// }
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import StagesList from "../Components/StagesList";

export default function Vocalization({ navigation }) {

const Stage = [
  {
    name: 'Two words',
    nav: 'Twothreeword',
  },
  {
    name: 'Three words',
    nav: 'Vocalization',
  },
  
  {
    name: 'Sentenses is greater then three',
    nav: 'Twothreeword',
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
          alignSelf:"center",
          width: 100,
        }}
      >
     
      </View>

      <StagesList  Stage={Stage} navigation={navigation} />

    </View>
  )
}
