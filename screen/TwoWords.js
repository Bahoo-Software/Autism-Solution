
// import {View, Text, Pressable, FlatList, Image} from 'react-native';
// import React, { useState } from 'react';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import speakGreeting from '../Components/speakGreeting';
// // import * as Speech from "expo-speech";
// import Url from '../Url.json';
// import axios from 'axios';
// export default function TwoWords({navigation}) {
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
import { View, Text, FlatList, Dimensions, Pressable, Image,ActivityIndicator } from 'react-native'
import axios from 'axios';
import speakGreeting from '../Components/speakGreeting';
import { useNavigation } from '@react-navigation/native';
import Url from '../Url.json'
const TwoWords = () => {
  const Data1= [
  { id:0,img: "", title: "Empowering Artisans,\n Farmers & Micro Business" },
  {id:1, img: "", title: "Connecting NGOs, Social Enterprises with Communities" },
  {id:2, img:"", title: "Donate, Invest & Support infrastructure projects" },

]
// const Ref=useRef(null)
const [currentindex,SetCurrentindex]=useState(0)
const keyExactor=useCallback((index)=>index.toString())
const [Data,SetData]=useState(Data1)
const [loader,Setloader]=useState(true)
const navigation=useNavigation()
// const [Currentindex,SetCurrentindex]=useState(0)
// const flatlistRef = useRef(null)
// const [reflatelist,SetFlatlistred]=useState()
const Ref=useRef(null)
// const {width} = 

// const navigation=useNavigation()
// var data = JSON.stringify({
//   "Category": "ThreeWords"
// });

const GetData = () => {
  // var data = JSON.stringify({
  //   Category: 'ThreeWords',
  // });

  var config = {
    method: 'get',
    url: `${Url.baseurl}Product/${'TwoWord'}`,
    headers: {
      'Content-Type': 'application/json',
    },
    // data: data,
  };

  axios(config)
    .then(function (response) {
      SetData(response.data)
      console.log(response.data);
      Setloader(false)
    })
    .catch(function (error) {
      console.log(error);
    });
};
React.useEffect(() => {
  navigation.addListener('focus',()=>{
    GetData()

  })
  loader?null:  
  
  Ref.current.scrollToIndex({
    animated: true,
    index: currentindex ,
  });
}, [currentindex]);
  return loader?(
 
      <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<ActivityIndicator size={"large"}   color={"#523275"} />
</View>

  ):(
        <View style={{ position: "absolute", height: '100%', width: "100%", justifyContent: "center" }}>
        <FlatList
          data={Data}
          ref={Ref}
          initialScrollIndex={currentindex}
          horizontal
          contentContainerStyle={{ paddingBottom: 100 }}
          // keyExtractor={keyExactor}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          scrollEnabled={false}
          pagingEnabled
          // getItemLayout={GteLayOut}

          renderItem={({ item,index }) => (
            <>
            <View key={item.Name.toString()}    style={{  flex:1,alignItems: "center", padding: 20, justifyContent: "center", }}>

              <View style={{ marginTop: 30, width: 306, height: 334,  borderTopEndRadius: 20, borderTopLeftRadius: 20, alignSelf: "center", justifyContent: "center", alignItems: 'center' }}>
                <View style={{ width: 285, height: 243, alignItems: 'center' }}>
                  <Image  style={{width:"100%",height:"100%"  }}  source={{uri:`${Url.baseurl}${item.VocalImage}`}} />
                </View>
              </View>
              <View>
            <Pressable
            
            disabled={false}
            onPress={() => {
              // speakGreeting
              speakGreeting(item.Name);

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
                    borderColor: '#fff',
                    borderWidth: 1,
                    height: '80%',
                    justifyContent: 'center',

                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#523275',
                    }}
                  >
                    {/* {item.PronunSymbol} */}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    color: '#000000',
                  }}
                >
                  {item.Name}
                </Text>
                {/* <Speaker/> */}
                <View
                  style={{
                    width: '14%',
                    borderRadius: 8,
                    borderColor: '#523275',
                    height: '80%',
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                >
                  <Image
                    style={{
                      height: 31,
                      width: 31,
                    }}
                    source={require('../assets/Speaker.png')}
                  />
                </View>
              </View>
            </Pressable>
            <Pressable
            
            disabled={false}
            onPress={() => {
              // speakGreeting
              // speakGreeting(item.Name);
              if(Data.length-1==currentindex){
                alert("This is the last index")
              }else{
                SetCurrentindex(currentindex+1)
              }

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
                  backgroundColor: '#523275',
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
                      fontSize: 16,
                      color: '#523275',
                    }}
                  >
                    {/* {item.PronunSymbol} */}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff',
                  }}
                >
                 Next
                </Text>
                {/* <Speaker/> */}
                <View
                  style={{
                    width: '14%',
                    borderRadius: 8,
                    borderColor: '#523275',
                    height: '80%',
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                >
                  <Image
                    style={{
                      height: 31,
                      width: 31,
                    }}
                    // source={require('../assets/Speaker.png')}
                  />
                </View>
              </View>
            </Pressable>
          </View>
            </View>
              </>
          )}
        />

       
        </View>
  )
}

export default TwoWords




