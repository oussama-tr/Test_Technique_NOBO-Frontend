import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';

const Social = (props) => {

  return <WebView source={{ uri:props.navigation.state.params.url }} />;

};

export default Social;
