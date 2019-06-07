import React, { Component } from "react";
import { withRouter } from 'react-router'
import TopNav from '../nav/TopNav';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../login/Login';
import Register from '../login/Register';
import Regulate from '../regulate/Regulate'
import Coping from '../coping/Coping'
import Stats from '../stats/Stats'
import FindHelp from '../findhelp/FindHelp'
import Profile from '../profile/Profile'
import NewRegulate from '../regulate/NewRegulate'
import { getUserFromLocalStorage, logout, getUser } from '../login/LoginHandler'
import API from "../db/API"

let greatArray;

class Home extends Component {
    state = {
        user: getUserFromLocalStorage(),
        moods: []
    }

    componentDidMount() {
        const newState = {
            user: getUserFromLocalStorage(),
            moods: [],
            greatMoods: [],
            goodMoods: []
        }

        // API.getSpecificMood(5)
        // .then(moods => newState.moods = moods)
        // .then(moods => moods.filter(mood => {
        //     return ((mood.moodCategoryId === 5))
        // }))
        // .then(greatMoods => newState.greatMoods = greatMoods)
        // .then(() => this.setState(newState))

        API.getSpecificMood(5)
            .then(greatmoods => newState.greatMoods = greatmoods)
            .then(() => API.getSpecificMood(4))
            .then(goodmoods => newState.goodMoods = goodmoods)
            .then(() => API.getSpecificMood(3))
            .then(okaymoods => newState.okayMoods = okaymoods)
            .then(() => API.getSpecificMood(2))
            .then(notsogreatmoods => newState.notSoGreatMoods = notsogreatmoods)
            .then(() => API.getSpecificMood(1))
            .then(badmoods => newState.badMoods = badmoods)
            .then(() => this.setState(newState))
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
                    <Route exact path="/regulate/new" render={(props) => {
                        return this.state.user ? (
                            <>
                                <TopNav />
                                <NewRegulate {...props}
                                    user={this.state.user}
                                    moods={this.state.moods}
                                    greatMoods={this.state.greatMoods}
                                    goodMoods={this.state.goodMoods}
                                    okayMoods={this.state.okayMoods}
                                    notSoGreatMoods={this.state.notSoGreatMoods}
                                    badMoods={this.state.badMoods}
                                    onLogout={logout} />
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