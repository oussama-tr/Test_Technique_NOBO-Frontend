import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './HeaderStyle';
import { ApplicationStyles } from 'App/Theme';
import { Colors, Images } from 'App/Theme'
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
import UserActions from 'App/Stores/User/Actions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({ navigation }) => {

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const logout = () => {
    navigation.navigate('Signin');
    dispatch(UserActions.logout());
  }

	return (
		<View style={styles.container}>
      <ImageBackground source={Images.background3} style={styles.image}>
        <View style={styles.mask}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome name="phone" size={22} color={Colors.darker} />
              <Text style={[styles.text, {marginLeft: 10, color: Colors.darker}]}>01 87 66 53 52</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.text, {marginRight: 10, color: "#343a40", fontWeight: 'bold', fontSize: 14}]}>{user? `${user.lastname} ${user.firstname}` : ''}</Text>
              <TouchableOpacity onPress={() => logout()}>
                <MaterialCommunityIcons name="exit-run" size={32} color="#343a40" />
              </TouchableOpacity>
            </View>
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
      <View style={styles.banner}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Entypo name="check" size={22} color="#343a40" />
          <Text style={styles.bannerText}>OUVERT PENDANT LE CONFINEMENT</Text>
        </View>
        <Text style={styles.bannerText}>OFFRE SPECIALE -3€/h A VIE</Text>
      </View>
		</View>
	);
};

export default Header;
