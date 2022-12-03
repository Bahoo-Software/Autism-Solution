import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const FormInput = ({
  labelValue,
  placeholderText,
  marginTo,
  Status,
  limit,
  ...rest
}) => {

  return (
    <View style={{marginBottom:10,width:'90%',alignSelf:'center',}}>
      <TextInput
       style={{borderWidth:1,borderRadius:10,borderColor:'#9A9A9A',color:"#828282"}}
       value={labelValue}
       numberOfLines={1}
       editable={Status}
       placeholder={placeholderText}
       maxLength={limit}
       placeholderTextColor="#828282"
      //  disableFullscreenUI={true}
       {...rest}
       />
       </View>
  );
};

export default FormInput;

