import React from 'react'
import styles from './SplashScreenStyle'
import { Images } from 'App/Theme'
import { View, Text, Image, Animated } from 'react-native'
import { LogBox } from 'react-native';

class SplashScreen extends React.Component {
  state = {
    LogoAnime: new Animated.Value(0),
  }

  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

    const { LogoAnime } = this.state
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
      }).start(),

    ]).start(() => {
      setTimeout(() => this.props.navigation.navigate('Signin'), 1500)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}
        >
          <Image source={Images.logo}/>
        </Animated.View>
      </View>
    )
  }
}
export default SplashScreen
