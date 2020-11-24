import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import Signin from 'App/Containers/Signin/Signin'
import Signup from 'App/Containers/Signup/Signup'
import Home from 'App/Containers/Home/Home'
import Social from 'App/Containers/Social/Social'

import { fromRight } from 'react-navigation-transitions';


const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    Signin: Signin,
    Signup: Signup,
    Home: Home,
    Social: Social,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
    transitionConfig: () => fromRight(),
  }
)

export default createAppContainer(StackNavigator)
