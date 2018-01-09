import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBNgWi081oOdMN6gsFipEdC6k5ZfT3nJn0',
      authDomain: 'auth-2695d.firebaseapp.com',
      databaseURL: 'https://auth-2695d.firebaseio.com',
      projectId: 'auth-2695d',
      storageBucket: 'auth-2695d.appspot.com',
      messagingSenderId: '507870856996'
    })
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
