import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
import styles from './HomeStyle';
import { ApplicationStyles } from 'App/Theme';
import { Colors, Images } from 'App/Theme'
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
import UserActions from 'App/Stores/User/Actions';
import Header from 'App/Components/Header/Header';
import Footer from 'App/Components/Footer/Footer';
import ServiceActions from 'App/Stores/Service/Actions';
import ListItem from 'App/Components/Flatlist/ListItem';

const Home = ({ navigation }) => {

	const user = useSelector((state) => state.user.user);
	const token = useSelector((state) => state.user.token);
	const rows = useSelector((state) => state.service.rows);

	const dispatch = useDispatch();

	useEffect(() => {
		const payload = {
			token: token,
			userId: user.id
		};
		dispatch(ServiceActions.fetch(payload));
  }, []);

	return (
		<ScrollView style={styles.container}>
      <Header navigation={navigation} />
			<View style={{felx: 1}}>
				<FlatList
				data={rows}
				renderItem={({ item, index }) => <ListItem item={item}/>}
				keyExtractor={item => item.prestation_id.toString()}
				/>
			</View>
			<Footer navigation={navigation} />
		</ScrollView>
	);
};

export default Home;
