import Tts from 'react-native-tts';

const speakGreeting = (item) => {
    const greeting = `${item}`;
    const options = {
      voice: "com.apple.speech.synthesis.voice.Fred",
      pitch: 1.5,
      rate: 0.7,
    };
    // Tts.speak('Hello, world!', {
    //   iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
    //   rate: 0.5,
    // });
    // Android
    // Tts.speak('Hello, world!', {
    //   androidParams: {
    //     KEY_PARAM_PAN: -1,
    //     KEY_PARAM_VOLUME: 0.5,
    //     KEY_PARAM_STREAM: 'STREAM_MUSIC',
    //   },
    // });
    Tts.speak(greeting, options);
  };

  export default speakGreeting;