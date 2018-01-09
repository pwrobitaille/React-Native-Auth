import React, { Component } from 'react'
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
  state = { text: '' }


  render() {
    return(
      <Card>
        <CardSection>
          <Input
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            label='Email'
          />
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button text={'Log In'} />
        </CardSection>

      </Card>
    )
  }
}

export default LoginForm
