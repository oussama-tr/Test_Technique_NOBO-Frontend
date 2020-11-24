import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './HeaderStyle';
import { ApplicationStyles } from 'App/Theme';
import { Colors, Images } from 'App/Theme'
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
import UserActions from 'App/Stores/User/Actions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = ({ navigation }) => {

  const dispatch = useDispatch();

	return (
		<View style={styles.container}>
      <ImageBackground source={Images.background3} style={styles.image}>
        <View style={styles.mask}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name="phone" size={22} color={Colors.darker} />
            <Text style={[styles.text, {marginLeft: 10, color: Colors.darker}]}>01 87 66 53 52</Text>
          </View>
          <Image source={Images.logo} style={styles.logo}/>
          <Text style={styles.text}>
            Hommes & femmes de ménage à domicile
          </Text>
          <Text style={styles.smallText}>
            Formé(e)s aux standards hôteliers, chez vous en quelques clics !
          </Text>
        </View>
      </ImageBackground>
		</View>
	);
};

export default Header;
