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
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { View } from 'react-native-web';
import { ActivityIndicator,View } from 'react-native';
import Fourlatter from './screen/Fourlatter';
import GreaterThenThreeLatter from './screen/GreaterThenThreeLatter';
import TwoWords from './screen/TwoWords';
import ThreeWords from './screen/ThreeLatter';
import Scentence from './screen/Scentence';
import GreaterScentence from './screen/GreaterScentence';
import Threelatters from './screen/ThreeLatter';
import ThreeWord from './screen/ThreeWord';
import OptionalQuz from './screen/OptionalQuz';
import SpechQuz from './screen/SpechQuz';
// import { store } from './app/store'
import { Provider } from 'react-redux'
import { store } from './Redux/store';
const Stack = createNativeStackNavigator();
function App() {
  const [initialRouteName,SetinitialRouteName]=React.useState('')
  const [loader,setloader]=React.useState(true)
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@User_status')
      
      if(value !== null) {
        // value previously stored
        SetinitialRouteName("Mainscreen")
        setloader(false)
      }
      SetinitialRouteName("Onboarding")
      setloader(false)

    } catch(e) {
      // error reading value
    }
  }

  // AsyncStorage
  React.useEffect(()=>{
   getData()
  },[])
  return loader?(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator  size={"large"} color={"cyan"}  />
    </View>
  ):(
    <SafeAreaView style={{flex: 1}}>
     <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName={initialRouteName}  screenOptions={{headerShown:true}}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Forget" component={Forget} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Mainscreen" component={Mainscreen}  options={{

            headerShown:false
          }}/>
          <Stack.Screen name="Guide" component={Guide} />
          <Stack.Screen name="Stages" component={Stages}  options={{

headerShown:false
}}/>
          <Stack.Screen name="Pronunciation" component={Pronunciation} 
          options={{

            headerShown:false
          }}
          />
          <Stack.Screen name="Twothreeword" component={Twothreeword}
          options={{

            // headerShown:false
            title:"Three Latter's"
          }}
          
          
          />
          <Stack.Screen name="Sentencebetweenfiveword" component={Sentencebetweenfiveword} 
          options={{
            title:"Scentence"
          }}
          
          />
          <Stack.Screen name="TwoWords" component={TwoWords} />
          <Stack.Screen name="Threelatters" component={Threelatters}
              options={{

                // headerShown:false
                title:"Three Letter's"
              }}
          />
           <Stack.Screen name="ThreeWord" component={ThreeWord}
              options={{

                // headerShown:false
                title:"Three Words"
              }}
          />
          <Stack.Screen name="Scentence" component={Scentence} />
          <Stack.Screen name="GreaterScentence" component={GreaterScentence} />
          <Stack.Screen name="OptionalQuz" component={OptionalQuz} />
          <Stack.Screen name="SpechQuz" component={SpechQuz} />
          <Stack.Screen name="Vocalization" component={Vocalization}
          
          options={{

            headerShown:false
          }}
          />          
          <Stack.Screen name="Quz" component={Quz} />          
          <Stack.Screen name="Fourlatter" component={Fourlatter} 
                options={{

                  // headerShown:false
                  title:"Four Letter's"
                }}
                
          
          />   
           <Stack.Screen name="GreaterThenThreeLatter" component={GreaterThenThreeLatter} 
                options={{

                  // headerShown:false
                  title:"Four Latter"
                }}
                
          
          />         
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </SafeAreaView>

  );
}
export default App;



    // 
