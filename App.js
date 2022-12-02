/** @format */

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from './screen/Onboarding'

import Login from './screen/Login'
import Signup from './screen/Signup'

import Forget from './screen/Forget'
import { SafeAreaView } from 'react-native-safe-area-context'
import Mainscreen from './screen/Mainscreen'
import Guide from './screen/Guide'
import Stages from './screen/Stages'
import Punctuation from './screen/Pronunciation'
import Twothreeword from './screen/Twothreeword'
import Sentencebetweenfiveword from './screen/Sentencebetweenfiveword'
import Pronunciation from './screen/Pronunciation'
const Stack = createNativeStackNavigator()

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Onboarding"
            component={Onboarding}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
          
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Forget"
            component={Forget}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Mainscreen"
            component={Mainscreen}
          />
             <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Guide"
            component={Guide}
          />
             <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Stages"
            component={Stages}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Pronunciation"
            component={Pronunciation}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Twothreeword"
            component={Twothreeword}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Sentencebetweenfiveword"
            component={Sentencebetweenfiveword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
