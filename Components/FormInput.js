import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const FormInput = ({
  labelValue,
  placeholderText,
  marginTo,
  ...rest
}) => {

  return (
    <View style={{marginBottom:10,width:'90%',alignSelf:'center',}}>
      <TextInput
       style={{borderWidth:1,borderRadius:10,borderColor:'#9A9A9A',color:"#828282"}}
       value={labelValue}
       numberOfLines={1}
       placeholder={placeholderText}
       placeholderTextColor="#828282"
       {...rest}
       />
       </View>
  );
};

export default FormInput;

