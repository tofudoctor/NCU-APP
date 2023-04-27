import React, { useState } from 'react';
import {Alert, View, TextInput, Button, Image} from 'react-native';

function Register({ navigation }) {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const handlePress = () => {
    if (account.trim() === '' || password.trim() === '') {
      Alert.alert('錯誤', '帳號密碼不得為空');
      return;
    }
    else{
      navigation.navigate('Info', {account, password})
    }
  };

  return (
    //顯示在螢幕畫面上的都要放在這
    <View style={{alignSelf:'center',alignItems:'center'}}>
      <View style={{width:250,height:200,marginTop:50}}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={{
            uri: 'https://media.istockphoto.com/id/1303860322/vector/vector-illustration-register-now-speech-bubble-label.jpg?s=612x612&w=0&k=20&c=gOtVI0FayIfjaDVYL66XIbbMp1VXX_1Hsc8kFNKabAk=',
          }}
        />
      </View>

      <TextInput
        style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="輸入帳號"
        onChangeText={setAccount}
        value={account}
      />
      <TextInput
        style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="輸入密碼"
        onChangeText={setPassword}
        value={password}
      />

      <Button
        title="我要註冊!"
        onPress={handlePress}
      />  
    </View>
  );
}
export default Register;