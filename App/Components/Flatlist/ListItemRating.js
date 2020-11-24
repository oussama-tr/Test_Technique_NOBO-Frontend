import React, { useContext, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Colors } from 'App/Theme';
import { Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Modalize } from 'react-native-modalize';
import ServiceActions from 'App/Stores/Service/Actions';
import { useDispatch } from 'react-redux';
import { Portal } from 'react-native-portalize';
import StarRating from 'react-native-star-rating';

const ListItemRating = ({ item }) => {

	return (
		<View style={styles.container}>
			<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{marginRight: 20, fontWeight: 'bold', fontSize: 16}}>{item.category}</Text>
				<StarRating
					fullStarColor='#FFDF00'
	        disabled={true}
	        maxStars={5}
	        rating={item.rating}
	      />
			</View>
		</View>
	);
};

export default ListItemRating;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},

});
