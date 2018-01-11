import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBNgWi081oOdMN6gsFipEdC6k5ZfT3nJn0',
      authDomain: 'auth-2695d.firebaseapp.com',
      databaseURL: 'https://auth-2695d.firebaseio.com',
      projectId: 'auth-2695d',
      storageBucket: 'auth-2695d.appspot.com',
      messagingSenderId: '507870856996'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
            text={'Log Out'}
          />

        )

      case false:
        return <LoginForm />

      default:
        return <Spinner size='large' />
    }
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
