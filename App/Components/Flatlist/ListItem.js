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

const ListItem = ({ item }) => {
	
	const dispatch = useDispatch();

	const quickViewModalRef = useRef(null);
	const quickView = () => quickViewModalRef.current?.open();

	const formatDate = date => dateFormat(new Date(date), 'd mmmm yyyy');

  const cancel = (serviceId) => {
		const payload = {
			serviceId: item.prestation_id,
		}
		dispatch(ServiceActions.cancel(payload));
	}

	return (
		<View style={styles.container}>
			<View style={styles.item}>
				<View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
					<TouchableOpacity>
						<AntDesign name="star" size={24} color={Colors.darker} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {cancel()}} style={{marginLeft: 10}}>
						<MaterialIcons name="cancel" size={24} color={Colors.darker} />
					</TouchableOpacity>
				</View>
				<View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
					<FontAwesome name="home" size={30} color={Colors.darker} />
					<Text style={styles.text}>{`${item.address.street} ${item.address.zipcode} ${item.address.city}, ${item.address.country}` }</Text>
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<Ionicons name="woman" size={30} color={Colors.darker} />
					<Text style={styles.text}>{`${item.provider.firstname} ${item.provider.lastname}` }</Text>
				</View>
			</View>


		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		margin: 10,
		backgroundColor: 'rgba(246, 187, 177, 0.6)',
		padding: 30,
		borderRadius: 12,
	},
	text: {
		color: Colors.grey,
		fontWeight: 'bold',
		fontSize: 14,
		marginLeft: 10,
	}

});
