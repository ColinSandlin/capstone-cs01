import React, { Component } from "react";
// import { Form, Button, Container, Grid, Header, Message, Segment } from 'semantic-ui-react';


import RegulateLogo from "../../Regulate.svg"




export default class Regulate extends Component {

    getTimestamp = () => {
        const date = new Date()
        const date2 = date.toLocaleDateString()
        const timestamp = date.toLocaleTimeString()
        return <p>{`${date2}  at  ${timestamp}`}</p>
    }

    newRegulateEntry = () => {
        this.props.resetState();
        this.props.history.push('/regulate/new')
    }

    render() {
        const username = this.props.user.username;

        return (
            <>
                <div className="main-regulate-container">
                    <h2>It's good to see you, {username}!</h2>
                    {this.getTimestamp()}
                    <div id="regulate-logo">
                        <img src={RegulateLogo} alt="regulate-logo"></img>
                    </div>
                    <button className="colin-button" onClick={this.newRegulateEntry}>New Entry</button>
                </div>
            </>
        )
    }
}
