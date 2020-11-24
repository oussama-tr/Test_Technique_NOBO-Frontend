import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './FooterStyle';
import { ApplicationStyles } from 'App/Theme';
import { Colors, Images } from 'App/Theme'
import { useDispatch, useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Footer = ({ navigation }) => {

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const logout = () => {
    navigation.navigate('Signin');
    dispatch(UserActions.logout());
  }

	return (
		<View style={styles.container}>
      <View style={{alignSelf: 'center', flexDirection: 'row'}}>
        <TouchableOpacity style={styles.socialButton} onPress={() => console.log("nav")}>
          <Feather name="instagram" size={36} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => console.log("nav")}>
          <FontAwesome name="facebook-square" size={36} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center', marginVertical: 10}}>
        <Text style={{color: Colors.primary,fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>À propos de Nobo</Text>
        <Text style={{color: Colors.white, textAlign: 'center'}}>Conditions Générales de Vente</Text>
        <Text style={{color: Colors.white, textAlign: 'center'}}>Femme de ménage à Paris</Text>
        <Text style={{color: Colors.white, textAlign: 'center'}}>Femme de ménage à Lyon</Text>

      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
        <Image source={Images.logo}/>
        <Image source={Images.subLogo} style={styles.logo}/>
      </View>
      <Text style={{color: Colors.white, textAlign: 'center'}}>Nobo © 2020</Text>
		</View>
	);
};

export default Footer;
