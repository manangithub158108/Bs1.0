import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class LoginScreen extends Component{

    state = {email : '', password : ''}

    Login = async() => {
        const login = firebase.auth().signInWithEmailAndPassword(
            this.state.email, this.state.password
        )
        if(login){
            alert('User logged in succesfully');
            this.props.navigation.navigate('HomeScreen');
        }
    }

  render(){
    return(
      <View style = {{backgroundColor : '#222831'}}>
        <TextInput onChangeText = {(text) => {
            this.setState({
                email : text
            })
        }} style = {style.TextInput} placeholder = {'Enter email'}></TextInput>
        <TextInput onChangeText = {(text) => {
            this.setState({
                password : text
            })
        }} style = {style.TextInput} placeholder = {'Enter password'} secureTextEntry = {true}></TextInput>
        <TouchableOpacity onPress = {() => {
            this.Login();
        }}>
            <Text style = {style.button}> Login </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
    TextInput : {
        display : 'flex',
        backgroundColor : '#393e46',
        color :'#eeeeee',
        width : '90%',
        height : 40,
        alignSelf : 'center',
        marginTop : 10,
        marginBottom : 10,
        borderRadius : 10,
        textAlign : 'center',
        fontSize : 25
    },

    address : {
        display : 'flex',
        backgroundColor : '#393e46',
        color :'#eeeeee',
        width : '90%',
        height : 100,
        alignSelf : 'center',
        marginTop : 10,
        marginBottom : 10,
        borderRadius : 10,
        textAlign : 'center',
        fontSize : 25
    },

    button : {
        display : 'flex',
        backgroundColor : '#00adb5',
        color :'#eeeeee',
        width : '90%',
        height : 40,
        alignSelf : 'center',
        marginTop : 30,
        marginBottom : 30,
        borderRadius : 30,
        textAlign : 'center',
        fontSize : 25,
        justifyContent : 'center'
    },
})