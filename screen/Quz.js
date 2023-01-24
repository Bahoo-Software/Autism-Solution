import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Backbtn from '../assets/Backbtn.svg';
import LoginBtn from '../Components/Loginbtn';
import {useNavigation} from '@react-navigation/native';
const Quz = () => {
  const Data = ['Apple', 'BApple', 'Cappple', 'DApple'];
  const [Select, SetSelect] = useState();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, paddingTop: 10, backgroundColor: '#fff'}}>
 
      <View
        style={{alignItems: 'center', height: 300, justifyContent: 'flex-end'}}>
        <Image source={require('../assets/Apple.png')} />
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
          Question 1
        </Text>
      </View>
      <FlatList
        data={Data}
        numColumns={2}
        renderItem={({item, index}) => (
          <Pressable
            style={{
              margin: 20,
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
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: index == Select ? '#fff' : '#000000',
              }}>
              {index + 1} Apple
            </Text>
          </Pressable>
        )}
      />
      <TouchableOpacity
        style={{
          width: '100%',
          height: 46,
          alignItems: 'center',
          bottom: 20,
        }}
        onPress={() => {
          // API();
          navigation.navigate('Mainscreen');
        }}>
        <LoginBtn
          color="#E68231"
          textcolor="#fff"
          textfontsize={18}
          name="Next"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Quz;
