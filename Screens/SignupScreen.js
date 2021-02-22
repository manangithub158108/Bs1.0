import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class Signup extends Component{

    state = {email : '', password : '', first_name : '', last_name : '', address : '', contact : ''}

    Signup = async() => {
        const Signup = await firebase.auth().createUserWithEmailAndPassword(
            this.state.email, this.state.password
        )
        if(Signup){
            alert('User Signed up successfully');
            this.props.navigation.navigate('LoginScreen');
        }
    }

  render(){
    return(
      <View style = {{backgroundColor : '#222831'}}>
        <TextInput onChangeText = {(text) => {
            this.setState({
                first_name : text
            })
        }} style = {style.TextInput} placeholder = {'Enter first name'}></TextInput>
        <TextInput onChangeText = {(text) => {
            this.setState({
                last_name : text
            })
        }} style = {style.TextInput} placeholder = {'Enter last name'}></TextInput>
        <TextInput onChangeText = {(text) => {
            this.setState({
                address : text
            })
        }} style = {style.address} multiline = {true} placeholder = {'Enter address'}></TextInput>
        <TextInput onChangeText = {(text) => {
            this.setState({
                contact : text
            })
        }} style = {style.TextInput} placeholder = {'Enter contact'}></TextInput>
        <TextInput onChangeText = {(text) => {
            this.setState({
                email : text
            })
        }} style = {style.TextInput} placeholder = {'Enter email'}></TextInput>
        <TextInput onChangeText = {(text) => {
            this.setState({
                password : text
            })
        }} secureTextEntry = {true} style = {style.TextInput} placeholder = {'Enter password'}></TextInput>
        <TouchableOpacity onPress = {(text) => {
            this.Signup();
        }}>
            <Text style = {style.button}> Signup </Text>
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