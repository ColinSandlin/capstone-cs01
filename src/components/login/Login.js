import React, { Component } from 'react';
import { Form, Button, Container, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { login } from '../login/LoginHandler'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    submit = () => {
        login(this.state.email, this.state.password)
            .then(user => {
                this.props.onLogin(user);
                this.props.history.push('/regulate')
            })
    }


    render() {
        return (
            <Container className="login-container">
                <Grid centered columns={2} verticalAlign="middle">
                    <Grid.Column >
                        <Segment >
                            <Header as="h1" textAlign="center">
                                Welcome!
                                 </Header>
                            <Form className="login-form" onSubmit={this.submit}>
                                <Form.Field
                                    control="input"
                                    type="email"
                                    label="Email Address"
                                    placeholder="username@email.com"
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                />
                                <Form.Field
                                    control="input"
                                    type="password"
                                    label="Password"
                                    placeholder="*******"
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />
                                <Button content="Login" />
                            </Form>
                            <Message className="auth--message">
                                Not registered yet? <Link to="/register">Sign Up</Link>
                            </Message>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container >
        )
    }
}