import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createStore from 'App/Stores';
import RootScreen from './Containers/Root/RootScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import { ApplicationStyles } from 'App/Theme';
const { store, persistor } = createStore();
import { Host } from 'react-native-portalize';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<PaperProvider theme={ApplicationStyles.paperStyle}>
						<Host>
							<RootScreen />
						</Host>
					</PaperProvider>
				</PersistGate>
			</Provider>
		);
	}
}
