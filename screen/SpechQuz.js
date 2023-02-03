import { View, Text, Pressable, Image, FlatList, Dimensions,ActivityIndicator, Alert } from 'react-native';
import React, { useState, useCallback, useRef } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginBtn from '../Components/Loginbtn';
import VoiceIcon from '../assets/Vector.svg';
import url from '../Url.json'
import VoiceILiseningVectorcon from '../assets/LiseningVector.svg';
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import speakGreeting from '../Components/speakGreeting';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const SpechQuz = () => {
  const navigation = useNavigation()
  const [StartRecord, SetStart] = useState(false);
  const [Correct, Setcorrect] = useState(false)
  const [currentindex, SetCurrentindex] = useState(0)
  const keyExactor = useCallback((index) => index.toString())
const [loader,Setloader]=useState(true)
// let [tempData,SetempData]=useState();

let tempData=[];

  const width = Dimensions.get('screen').width
  const [Data, SetData] = useState([])
  const Ref = useRef(null)
  let result = 0;
  React.useEffect(() => {
    navigation.addListener('focus', () => {
      GetData()
    })
    loader?null:  
  
  Ref.current.scrollToIndex({
    animated: true,
    index: currentindex ,
  });
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [currentindex]);
  const onSpeechStartHandler = e => {
    // console.log('start handler==>>>', e);
  };
  const onSpeechEndHandler = e => {
    console.log('stop handler', e);
    SetStart(false);
  };

  const onSpeechResultsHandler = e => {
    let text = e.value[0];

    console.log(text.split(" "));
    const value = text.split(" ")[0];
    Setcorrect(true)

    console.log(value.toUpperCase());

    // else{
    //   alert("your Voice is not recongize")
    // }
    // console.log('speech result handler', e);
  };

  const startRecording = async () => {
    // setLoading(true)
    try {
      await Voice.start('en-Us');
    } catch (error) {
      console.log('error raised', error);
    }
  };
  const OnStartRecord = (val) => {
  
    console.log('Start');
    SetStart(true);
    startRecording(val);
  };
  const OnStopRecord = () => {
    console.log('Stop');
    SetStart(false);
    Voice.stop();
  };
  const GetData = () => {
    // var data = JSON.stringify({
    //   Category: 'Quzs',
    // });

    var config = {
      method: 'get',
      url: `${url.baseurl}Quz/`,
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
  return loader?(
 
    <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<ActivityIndicator size={"large"}   color={"#523275"} />
</View>

):
  (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
      }}>
      <FlatList
        // data={Data}
        // horizontal
        // pagingEnabled
        // ref={Ref}
        // initialScrollIndex={currentindex}
        // contentContainerStyle={{ paddingBottom: 100 }}
        // keyExtractor={(item, index) => String(index)}
        // showsHorizontalScrollIndicator={false}
        // scrollEventThrottle={32}
        // scrollEnabled={false}
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
        renderItem={({ item }) => (
          <View>

            <View
              style={{
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
              }}>
              <View style={{ width: 285, height: 243, alignItems: 'center' }}>
                <Image style={{ width: "100%", height: "100%" }} source={{ uri: `${url.baseurl}${item.VocalImage}` }} />
              </View>
              <View style={{ height: 130, justifyContent: 'center' }}>
                <Pressable onPress={StartRecord ? OnStopRecord : OnStartRecord}>
                  {StartRecord ? <VoiceILiseningVectorcon /> : <VoiceIcon />}
                </Pressable>
              </View>
              <Pressable
              disabled={Correct ? false : true}
                style={{
                  width: '100%',
                  height: 46,
                  alignItems: 'center',
                  top: 60,
                }}
                onPress={() => {
                  if(Data.length-1==currentindex){
                    Alert.alert("Result",`Your result is ${result}`)

                  }else{

                    console.log("Index", currentindex);
                    SetCurrentindex(()=>currentindex+1)
                    Setcorrect(false)
                  }

                }}>
                <LoginBtn
                  color={Correct ? "#523275" : "#8B8080"}
                  textcolor={Correct ? "#fff" : "#000"}
                  textfontsize={18}
                  name="Next"
                />
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SpechQuz;
