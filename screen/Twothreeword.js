// import {View, Text, Pressable, FlatList, Image} from 'react-native';
// import React, { useState } from 'react';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import speakGreeting from '../Components/speakGreeting';
// // import * as Speech from "expo-speech";
// import Url from '../Url.json';
// import axios from 'axios';
// export default function Twothreeword({navigation}) {
//   const  [Two,SetTwo]=useState([]);
//   const [currentindex,SetCurrentindex]=useState(1)
//   const GetData = () => {
//     // var data = JSON.stringify({
//     //   Category: 'ThreeWords',
//     // });

//     var config = {
//       method: 'get',
//       url: `${Url.baseurl}Product/${'ThreeWords'}`,
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
//   });
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: '#fff',
//       }}>
//       <View
//         style={{
//           height: '5%',
//           alignItems: 'center',
//           flexDirection: 'row',
//           width: '100%',
//           marginTop: '4%',
//         }}>
//         <View
//           style={{
//             width: '10%',
//           }}>
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
//             width: '21%',
//           }}></View>
//         <Text
//           style={{
//             fontSize: 18,
//             fontWeight: 'bold',
//           }}>
//           Two Or Three Words
//         </Text>
//       </View>
//       <FlatList
//         data={Two}
//         initialScrollIndex={currentindex}
//         horizontal
//         contentContainerStyle={{ paddingBottom: 100 }}
//         // keyExtractor={keyExactor}
//         showsHorizontalScrollIndicator={false}
//         scrollEventThrottle={32}
//         // scrollEnabled={false}
//         // pagingEnabled
//         style={{
//           width: '100%',
//           height: '100%',
//           marginTop: '7%',
//         }}
//         renderItem={({item, index}) => (
//           <View  style={{width:"100%"}}>
//             <Pressable
//               style={{
//                 marginBottom: 10,
//               }}
//               onPress={() => {
//                 speakGreeting(item.Name);
//               }}>
//               <View
//                 style={{
//                   marginBottom: 10,
//                 }}
//               />
//               <View
//                 style={{
//                   width: '94%',
//                   backgroundColor: '#fff',
//                   shadowColor: '#000',
//                   shadowOffset: {
//                     width: 0,
//                   },
//                   shadowOpacity: 0.9,
//                   shadowRadius: 4.65,
//                   elevation: 5,
//                   alignSelf: 'center',
//                   height: 58,
//                   justifyContent: 'center',
//                   borderRadius: 10,
//                 }}>
//                 <View
//                   style={{
//                     width: '94%',
//                     alignSelf: 'center',
//                     flexDirection: 'row',
//                   }}>
//                   <View
//                     style={{
//                       alignItems: 'center',
//                       flexDirection: 'row',
//                       width: '70%',
//                     }}>
//                     <Text
//                       style={{
//                         fontSize: 20,
//                         color: '#523275',
//                       }}>
//                       {index + 1}.
//                     </Text>
//                     <View
//                       style={{
//                         width: '6%',
//                       }}
//                     />
//                     <Text
//                       style={{
//                         fontSize: 20,
//                         color: 'black',
//                       }}>
//                       {item.Name}
//                     </Text>
//                   </View>

//                   <View
//                     style={{
//                       width: '30%',
//                       alignItems: 'flex-end',
//                     }}>
//                     <View
//                       style={{
//                         width: '40%',
//                         borderRadius: 8,
//                         borderColor: '#523275',
//                         height: '80%',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                       }}>
//                       <Image
//                         style={{
//                           height: 31,
//                           width: 30,
//                         }}
//                         source={require('../assets/Speaker.png')}
//                       />
//                     </View>
//                   </View>
//                 </View>
//               </View>
//               <View  style={{width:"90%",bottom:20,alignSelf:"center"}}>
     
//         </View>
//             </Pressable>
//           </View>
//         )}
//       />
//            <Pressable
//            style={{bottom:10,alignItems:"center"}}
//           onPress={()=>{
//             SetCurrentindex(currentindex+1)
    
//           }}
//           >
         
//           <Text>Next</Text>
//           </Pressable>
//     </View>
//   );
// }

// import { View, Text, FlatList, Dimensions, Pressable } from 'react-native'
// import React, { useCallback, useState,useRef } from 'react'
// // import { Color, Icon } from '../../Assets/export_Assets'
// // import Btn from '../../Assets/Components/Btn'
// // import { useNavigation } from '@react-navigation/native'
// const Data = [
//   { id:0,img: "", title: "Empowering Artisans,\n Farmers & Micro Business" },
//   {id:1, img: "", title: "Connecting NGOs, Social Enterprises with Communities" },
//   {id:2, img:"", title: "Donate, Invest & Support infrastructure projects" },


// ]
// const width = Dimensions.get('screen').width
// const Onboarding = () => {
// const [currentindex,SetCurrentindex]=useState(0)
// const keyExactor=useCallback((item)=>item.id.toString())
// // const [Currentindex,SetCurrentindex]=useState(0)
// // const flatlistRef = useRef(null)
// // const [reflatelist,SetFlatlistred]=useState()
// const Ref=useRef(null)
// // const navigation=useNavigation()
// React.useEffect(() => {
//   Ref.current.scrollToIndex({
//     animated: true,
//     index: currentindex ,
//   });
// }, [currentindex]);


//   // const Indicator = (item) => {
//   //   return (
//   //     <View style={{ position: "absolute", bottom: 100,flexDirection:'row', alignItems: 'center', justifyContent: "center" }}>
  
//   //       {Data.map((_, i) => (
//   //         <View key={`Indicator ${i}`} style={{ height: 12, width: 12,margin:10, borderRadius: 50, backgroundColor:i==currentindex?"cyan":'blue' }}>
  
//   //         </View>
//   //       ))}
//   //     </View>
//   //   )
//   // }



//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 0.4, backgroundColor:"cyan" }}>
//       </View>
//       <View style={{ flex: 0.6, backgroundColor: "#fff" }}>

//       </View>
//       <View style={{ position: "absolute", height: '100%', width: "100%", justifyContent: "center" }}>
//         <FlatList
//           data={Data}
//           ref={Ref}
//           initialScrollIndex={currentindex}
//           horizontal
//           contentContainerStyle={{ paddingBottom: 100 }}
//           keyExtractor={keyExactor}
//           showsHorizontalScrollIndicator={false}
//           scrollEventThrottle={32}
//           scrollEnabled={false}
//           pagingEnabled
//           // getItemLayout={GteLayOut}

//           renderItem={({ item,index }) => (
//             <View style={{ width, alignItems: "center", padding: 20, justifyContent: "center", }}>

//               <View style={{ marginTop: 30, width: 306, height: 334, backgroundColor: "#fff", borderTopEndRadius: 20, borderTopLeftRadius: 20, alignSelf: "center", justifyContent: "center", alignItems: 'center' }}>
//                 <View style={{ width: 285, height: 243, alignItems: 'center' }}>
//                   <item.img />
//                 </View>
//               </View>
//               <View style={{ alignItems: 'center' }}>
//                 <Text style={{ fontSize: 20, color: "green", textAlign: "center", }}>{item.title}</Text>
//               </View>
//             </View>
//           )}
//         />
//         {/* <View style={{ alignItems: "center" }}>
//           <Indicator />

//         </View> */}
//         <View  style={{width:"90%",bottom:20,alignSelf:"center"}}>
//           <Pressable
//           onPress={()=>{
//             // ScroollTo()
//             // if(currentindex==2){
//             //   navigation.navigate("Login")

//             //      return;
//             // }
//             // else{

//             //   SetCurrentindex(currentindex+1)
//             // }
//           }}
//           >
//           {/* <Btn Bg={Color.Illuminating_Emerald} Title={"Next"}  BtnClr={Color.White}/> */}

//           </Pressable>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default Onboarding
import React, { useCallback, useState,useRef } from 'react'
import { View, Text, FlatList, Dimensions, Pressable, Image } from 'react-native'
const Twothreeword = () => {
  const Data = [
  { id:0,img: "", title: "Empowering Artisans,\n Farmers & Micro Business" },
  {id:1, img: "", title: "Connecting NGOs, Social Enterprises with Communities" },
  {id:2, img:"", title: "Donate, Invest & Support infrastructure projects" },

]
// const Ref=useRef(null)
const [currentindex,SetCurrentindex]=useState(0)
const keyExactor=useCallback((item)=>item.id.toString())
// const [Currentindex,SetCurrentindex]=useState(0)
// const flatlistRef = useRef(null)
// const [reflatelist,SetFlatlistred]=useState()
const Ref=useRef(null)
// const {width} = 

// const navigation=useNavigation()
React.useEffect(() => {
  Ref.current.scrollToIndex({
    animated: true,
    index: currentindex ,
  });
}, [currentindex]);
  return (
        <View style={{ position: "absolute", height: '100%', width: "100%", justifyContent: "center" }}>
        <FlatList
          data={Data}
          ref={Ref}
          initialScrollIndex={currentindex}
          horizontal
          contentContainerStyle={{ paddingBottom: 100 }}
          keyExtractor={keyExactor}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          scrollEnabled={false}
          pagingEnabled
          // getItemLayout={GteLayOut}

          renderItem={({ item,index }) => (
            <View style={{  alignItems: "center", padding: 20, justifyContent: "center", }}>

              <View style={{ marginTop: 30, width: 306, height: 334, backgroundColor: "#fff", borderTopEndRadius: 20, borderTopLeftRadius: 20, alignSelf: "center", justifyContent: "center", alignItems: 'center' }}>
                <View style={{ width: 285, height: 243, alignItems: 'center' }}>
                  {/* <item.img /> */}
                  <Image  style={{width:"100%",height:"100%"  }}  source={{uri:"data:image/jpeg;base64,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"}} />
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: "green", textAlign: "center", }}>{item.title}</Text>
              </View>
            </View>
          )}
        />
        </View>
  )
}

export default Twothreeword




