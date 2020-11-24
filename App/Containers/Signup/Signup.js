import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './SignupStyle';
import { ApplicationStyles } from 'App/Theme';
import { Colors, Images } from 'App/Theme'
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, RadioButton } from 'react-native-paper';
import UserActions from 'App/Stores/User/Actions';

const Signup = ({ navigation }) => {

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    const payload = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      role: role
    }
    dispatch(UserActions.register(payload));
  }


	return (
		<View style={styles.container}>
      <ImageBackground source={Images.background2} style={styles.image}>
        <Image source={Images.logo} style={styles.logo}/>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Nom"
            onChangeText={lastName => setLastName(lastName)}
            value={lastName}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Prénom"
            onChangeText={firstName => setFirstName(firstName)}
            value={firstName}
          />
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
            onPress={() => {signup()}}
            style={styles.button}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.smallText}>Vous avez déja un compte ?</Text>
          <TouchableOpacity
            onPress={() => {navigation.goBack()}}>
            <Text style={styles.largeText}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
		</View>
	);
};

export default Signup;
