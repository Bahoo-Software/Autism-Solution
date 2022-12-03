import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginBtn from '../Components/Loginbtn';
import VoiceIcon from '../assets/Vector.svg';

import VoiceILiseningVectorcon from '../assets/LiseningVector.svg';
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import speakGreeting from '../Components/speakGreeting';
const Vocalization = ({navigation}) => {
  const [StartRecord, SetStart] = useState(false);
  const [Correct,Setcorrect]=useState(false)
  React.useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  const onSpeechStartHandler = e => {
    // console.log('start handler==>>>', e);
  };
  const onSpeechEndHandler = e => {
    console.log('stop handler', e);
    SetStart(false);
  };

  const onSpeechResultsHandler = e => {
    let text = e.value[0];
    // setResult(text);
    console.log(text.split(" "));
  const value=text.split(" ")[0];
    console.log(value.toUpperCase());
    if("MANGO"==value.toUpperCase()){
        // alert("Correct")
        Setcorrect(true)
    }
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
  const OnStartRecord = () => {
    console.log('Start');
    SetStart(true);
    startRecording();
  };
  const OnStopRecord = () => {
    console.log('Stop');
    SetStart(false);
    Voice.stop();
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={30} />
        </Pressable>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
          Vocalization
        </Text>
        <Pressable
          style={{
            borderRadius: 8,
            borderColor: '#523275',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => speakGreeting('Mango')}>
          <Image
            style={{
              height: 31,
              width: 30,
            }}
            source={require('../assets/Speaker.png')}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <View style={{justifyContent: 'center'}}>
          <Image source={require('../assets/mango.png')} />
        </View>
        <View style={{height: 130, justifyContent: 'center'}}>
          <Pressable onPress={StartRecord ? OnStopRecord : OnStartRecord}>
            {StartRecord ? <VoiceILiseningVectorcon /> : <VoiceIcon />}
          </Pressable>
        </View>
        <Pressable
          style={{
            width: '100%',
            height: 46,
            alignItems: 'center',
            top: 60,
          }}
          onPress={{}}>
          <LoginBtn
            color={Correct?"#523275":"#8B8080"}
            textcolor={Correct?"#fff":"#000"}
            textfontsize={18}
            name="Next"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Vocalization;
