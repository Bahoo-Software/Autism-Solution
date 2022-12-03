import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './screen/Onboarding';
import Login from './screen/Login';
import Signup from './screen/Signup';
import Forget from './screen/Forget';
import {SafeAreaView} from 'react-native-safe-area-context';
import Mainscreen from './screen/Mainscreen';
import Guide from './screen/Guide';
import Stages from './screen/Stages';
import Punctuation from './screen/Pronunciation';
import Twothreeword from './screen/Twothreeword';
import Sentencebetweenfiveword from './screen/Sentencebetweenfiveword';
import Pronunciation from './screen/Pronunciation';
import Otp from './screen/Otp';
import Vocalization from './screen/Vocalization';
import Quz from './screen/Quz';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown:false}}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Forget" component={Forget} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Mainscreen" component={Mainscreen} />
          <Stack.Screen name="Guide" component={Guide} />
          <Stack.Screen name="Stages" component={Stages} />
          <Stack.Screen name="Pronunciation" component={Pronunciation} />
          <Stack.Screen name="Twothreeword" component={Twothreeword} />
          <Stack.Screen name="Sentencebetweenfiveword" component={Sentencebetweenfiveword} />
          <Stack.Screen name="Vocalization" component={Vocalization} />          
          <Stack.Screen name="Quz" component={Quz} />          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default App;
