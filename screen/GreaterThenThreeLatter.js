
import React, { useCallback, useState,useRef } from 'react'
import { View, Text, FlatList, Dimensions, Pressable, Image,ActivityIndicator } from 'react-native'
import axios from 'axios';
import speakGreeting from '../Components/speakGreeting';
import { useNavigation } from '@react-navigation/native';
import Url from '../Url.json'
const GreaterThenThreeLatter = () => {
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
    url: `${Url.baseurl}Product/${'GreaterThenThreeLatter'}`,
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
            <View style={{  flex:1,alignItems: "center", padding: 20, justifyContent: "center", }}>

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

export default GreaterThenThreeLatter




