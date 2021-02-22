import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ItemScreen from './Screens/ItemScreen';

export default class App extends Component{
  render(){
    return(
      // <View>
        
      // </View>
      <AppContainer/>
    )
  }
}

const TabNavigationLoginAndSignup = createBottomTabNavigator({
  SignupScreen : {
    screen : SignupScreen,
    navigationOptions : {
      tabBarLabel : 'Signup Screen',
      tabBarIcon : <Image source = {require('./assets/Singup.png')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  },
  LoginScreen : {
    screen : LoginScreen,
    navigationOptions : {
      tabBarLabel : 'Login Screen',
      tabBarIcon : <Image source = {require('./assets/login.png')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  },
})

const TabNavigationItemExchange = createBottomTabNavigator({
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions : {
      tabBarLabel : 'Home Screen',
      tabBarIcon : <Image source = {require('./assets/home.jpg')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  },
  ItemScreen : {
    screen : ItemScreen,
    navigationOptions : {
      tabBarLabel : 'Item Screen',
      tabBarIcon : <Image source = {require('./assets/addItem.png')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  },
})

const SwitchNavigation = createSwitchNavigator({
  TabNavigationLoginAndSignup : {
    screen : TabNavigationLoginAndSignup
  },
  TabNavigationItemExchange : {
    screen : TabNavigationItemExchange
  }
})

const AppContainer = createAppContainer(SwitchNavigation);