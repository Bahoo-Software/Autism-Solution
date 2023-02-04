/** @format */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Keyboard
} from 'react-native';
import FormInput from '../Components/FormInput';
import LoginBtn from '../Components/Loginbtn';
import Entypo from 'react-native-vector-icons/Entypo';
import Loader from '../Components/Loader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Signup = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [username, setusername] = React.useState();
  const [btn,Setbtn]=useState(false)
  const [loading, setLoading] = useState(false);
  Keyboard.addListener('keyboardDidShow',()=>{
    Setbtn(true)
  })
  Keyboard.addListener('keyboardDidHide',()=>{
    Setbtn(false)
  })
 
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
    
      <View
        style={{
          width: '100%',
          height: '17%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 28,
            color: '#3E4A59',
            fontWeight: '800',
          }}>
          Get started now
        </Text>
        <View
          style={{
            height: '3%',
          }}
        />
      </View>
      <ScrollView  style={{flexGrow:1}}>
        <FormInput
          onChangeText={username => setusername(username)}
          labelValue={username}
          placeholder="Username"
          autoCapitalize="none"
          autocorrect={false}
        />
        <FormInput
          onChangeText={value => setEmail(value)}
          labelValue={email}
          placeholder="Email"
          autoCapitalize="none"
          autocorrect={false}
        />

        <FormInput
          onChangeText={value => setPassword(value)}
          labelValue={password}
          placeholder="password"
          autoCapitalize="none"
          autocorrect={false}
        />
      </ScrollView>
      <View>{
        btn?null:
      <TouchableOpacity
          style={{
            width: "100%",
            height: 46,
            alignItems: "center",
            bottom:30
          }}
          onPress={() => {
            // API();
            navigation.navigate("Otp",{
              Email:email,
              username:username,
              password:password
            })
          }}
        >
          <LoginBtn
            color="#0165FF"
            textcolor="#fff"
            textfontsize={18}
            name="Signup"
          />
        </TouchableOpacity>
}
        </View>
    </View>
  );
};

export default Signup;
