import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './SigninStyle';
import { ApplicationStyles } from 'App/Theme';
import { Colors, Images } from 'App/Theme'
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
import UserActions from 'App/Stores/User/Actions';

const Signin = ({ navigation }) => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("oussama.trabelsi@esprit.tn");
  const [password, setPassword] = useState("azerty");

  const login = () => {
    const payload = {
      email: email,
      password: password
    };
    dispatch(UserActions.login(payload));
  }

  const signup = () => {
    navigation.navigate("Signup");
  }

	return (
		<View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Image source={Images.logo} style={styles.logo}/>
        <Text style={styles.text}>L’hôtel, à la maison</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="E-mail"
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            mode="outlined"
            label="Mode de passe"
            onChangeText={password => setPassword(password)}
            value={password}
          />
          <TouchableOpacity
            onPress={() => {login()}}
            style={styles.button}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.smallText}>Vous n'avez pas de compte ?</Text>
          <TouchableOpacity
            onPress={() => {signup()}}>
            <Text style={styles.largeText}>Inscrivez vous maintenant</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
		</View>
	);
};

export default Signin;
