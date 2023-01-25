// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   Pressable,
//   ActivityIndicator
// } from 'react-native';
// import React, {useState} from 'react';
// import Backbtn from '../assets/Backbtn.svg';
// import LoginBtn from '../Components/Loginbtn';
// import {useNavigation} from '@react-navigation/native';
// import Url from '../Url.json'
// import axios from 'axios';

// const Quz = () => {
//   // const Data = ['Apple', 'BApple', 'Cappple', 'DApple'];
//   const [Data,SetData]=useState([])
//   const [Select, SetSelect] = useState();
//   const [loader,Setloader]=useState(true)
//   const navigation = useNavigation();
// // const GetData=()=>{
// //   var config = {
// //     method: 'get',
// //     url: `${Url.baseurl}/Quz/`,
// //     // headers: { }
// //   };
// //   axios(config)
// //   .then(function (response) {
// //     // console.log(JSON.stringify(response.data));
// //     SetData(response.data)
// //     Setloader(false)
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   });
  
// // }

// const GetData = () => {
//   // var data = JSON.stringify({
//   //   Category: 'Quzs',
//   // });

//   var config = {
//     method: 'get',
//     url: `${Url.baseurl}Quz/`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // data: data,
//   };

//   axios(config)
//     .then(function (response) {
//       SetData(response.data)
//       console.log(response.data);
//       Setloader(false)
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
// React.useEffect(()=>{
//   navigation.addListener('focus',()=>{
//     GetData()
//   })
// })

//   return loader?(
//     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//       <ActivityIndicator  size={"large"} color={"cyan"}  />
//     </View>
//   ):(
//     <View style={{flex: 1, paddingTop: 10, backgroundColor: '#fff'}}>
 
//       <View
//         style={{alignItems: 'center', height: 300, justifyContent: 'flex-end'}}>
//         <Image source={require('../assets/Apple.png')} />
//       </View>
  
//       <FlatList
//         data={Data}
//         numColumns={2}
//         renderItem={({item, index}) => (
//           <View>
//               <View
//         style={{
//           left:15,
//           width: '100%',
//           alignSelf: 'center',
//           height: 50,
//           justifyContent: 'center',
//         }}>
//         <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
//        {item.Question}
//         </Text>
//       </View>
       
//           <Pressable
//             style={{
//               margin: 20,
//               height: 70,
//               width: 144,
//               backgroundColor: index == Select ? '#E68231' : 'white',
//               borderRadius: 20,
//               alignItems: 'center',
//               shadowColor: '#000',
//               shadowOffset: {
//                 width: 0,
//                 height: 2,
//               },
//               shadowOpacity: 0.25,
//               justifyContent: 'center',
//               shadowRadius: 4,
//               elevation: 5,
//             }}
//             onPress={() => SetSelect(index)}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 fontWeight: 'bold',
//                 color: index == Select ? '#fff' : '#000000',
//               }}>
//               {index + 1} Apple
//             </Text>
//           </Pressable>
//            </View>
//         )}
//       />
//       <TouchableOpacity
//         style={{
//           width: '100%',
//           height: 46,
//           alignItems: 'center',
//           bottom: 20,
//         }}
//         onPress={() => {
//           // API();
//           navigation.navigate('Mainscreen');
//         }}>
//         <LoginBtn
//           color="#E68231"
//           textcolor="#fff"
//           textfontsize={18}
//           name="Next"
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Quz;


import React, { useCallback, useState,useRef } from 'react'
import { View, Text, FlatList, Dimensions, Pressable, Image,ActivityIndicator ,Alert} from 'react-native'
import axios from 'axios';
import speakGreeting from '../Components/speakGreeting';
import { useNavigation } from '@react-navigation/native';
import Url from '../Url.json'
const Quz = () => {
  const Data1= [
  { id:0,img: "", title: "Empowering Artisans,\n Farmers & Micro Business" },
  {id:1, img: "", title: "Connecting NGOs, Social Enterprises with Communities" },
  {id:2, img:"", title: "Donate, Invest & Support infrastructure projects" },

]
// const Ref=useRef(null)
const [currentindex,SetCurrentindex]=useState(0)
const keyExactor=useCallback((index)=>index.toString())
  const [Select, SetSelect] = useState();

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
//   "Category": "Quzs"
// });

const GetData = () => {
  // var data = JSON.stringify({
  //   Category: 'Quzs',
  // });

  var config = {
    method: 'get',
    url: `${Url.baseurl}Quz/`,
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
            <View key={item._id.toString()}    style={{  flex:1,alignItems: "center", padding: 20, justifyContent: "center", }}>

              <View style={{ marginTop: 30, width: 306, height: 334,  borderTopEndRadius: 20, borderTopLeftRadius: 20, alignSelf: "center", justifyContent: "center", alignItems: 'center' }}>
                <View style={{ width: 285, height: 243, alignItems: 'center' }}>
                  <Image  style={{width:"100%",height:"100%"  }}  source={{uri:`${Url.baseurl}${item.VocalImage}`}} />
                </View>
              </View>
              <View>
              <View
        style={{
          left:15,
          width: '100%',
          // alignSelf: 'center',
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>
       {item.Question}
        </Text>
      </View>
                <View  style={{height:180,marginBottom:20}}>

                
              <FlatList  
            
            data={item.Option}
            numColumns={2}
            renderItem={({ item,index })=>(
              <Pressable
            style={{
              margin: 10,
              padding:5,
              height: 70,
              width: 144,
              backgroundColor: index == Select ? '#E68231' : 'white',
              borderRadius: 20,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              justifyContent: 'center',
              shadowRadius: 4,
              elevation: 5,
            }}
            onPress={() => SetSelect(index)}>
              {/* {console.log(item,index1)} */}

            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: index == Select ? '#fff' : '#000000',
              }}>
              {index + 1} {item}
            </Text>
          </Pressable>
            )}
            />
            </View>
            <Pressable
            
            disabled={false}
            onPress={() => {
              // speakGreeting
              // speakGreeting(item.Name);
              if(Data.length-1==currentindex){
                // alert("This is the last index")
                Alert.alert("Quz","Your Quz Completed")

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

export default Quz




