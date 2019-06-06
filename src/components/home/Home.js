import React, { Component } from "react";
import { withRouter } from 'react-router'
import ApplicationViews from "../ApplicationViews"
import TopNav from '../nav/TopNav';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../login/Login';
import Register from '../login/Register';
import Regulate from '../regulate/Regulate'
import Coping from '../coping/Coping'
import Stats from '../stats/Stats'
import FindHelp from '../findhelp/FindHelp'
import Profile from '../profile/Profile'
import { getUserFromLocalStorage, logout } from '../login/LoginHandler'



class Home extends Component {
    state = {
        user: getUserFromLocalStorage()
    }


    render() {

        return (
            <>
                <Router>
                    <Route path="/login" render={(props) => <Login {...props} onLogin={(user) => this.setState({ user: user })} />} />
                    <Route path="/register" render={(props) => <Register {...props} onRegister={(user) => this.setState({ user: user })} />} />
                    <Route exact path="/regulate" render={(props) => {
                        return this.state.user ? (
                            <>
                                <TopNav />
                                <Regulate {...props} user={this.state.user} onLogout={logout} />
                            </>)
                            : (<Redirect to="/login" />)
                    }} />
                    <Route exact path="/coping" render={(props) => {
                        return this.state.user ? (
                            <>
                                <TopNav />
                                <Coping {...props} user={this.state.user} onLogout={logout} />
                            </>)
                            : (<Redirect to="/login" />)
                    }} />
                    <Route exact path="/stats" render={(props) => {
                        return this.state.user ? (
                            <>
                                <TopNav />
                                <Stats {...props} user={this.state.user} onLogout={logout} />
                            </>)
                            : (<Redirect to="/login" />)
                    }} />
                    <Route exact path="/findhelp" render={(props) => {
                        return this.state.user ? (
                            <>
                                <TopNav />
                                <FindHelp {...props} user={this.state.user} onLogout={logout} />
                            </>)
                            : (<Redirect to="/login" />)
                    }} />
                    <Route exact path="/profile" render={(props) => {
                        return this.state.user ? (
                            <>
                                <TopNav />
                                <Profile {...props} user={this.state.user} onLogout={logout} />
                            </>)
                            : (<Redirect to="/login" />)
                    }} />
                </Router>
            </>
        );
    }
}
export default Home;