import React from 'react';
import {Text, View, Button, Image} from 'react-native';

function Info({ navigation, route}) {
  const {account, password} = route.params;

  return (
    //顯示在螢幕畫面上的都要放在這
    <View style={{alignSelf:'center',alignItems:'center'}}>
      <View style={{width:300,height:300,marginTop:100}}>
        <Image
          style={{width: '100%',height: '100%'}}
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/2016/07/Success-Transparent.png',
          }}
        />
      </View>
      <View>
        <Text>你的帳號是:{account}</Text>
        <Text>你的密碼是:{password}</Text>
      </View>

      <Button
        title="讓我回去!"
        onPress={() => navigation.navigate('Register')}
      />  
    </View>
  );
}
export default Info;
