import React, { Component } from "react";
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import Moment, { moment } from "react-moment";
import timezone from 'moment-timezone'
import { Form, Button, Container, Grid, Header, Message, Segment } from 'semantic-ui-react';

import RegulateLogo from "../../Regulate.svg"




export default class Regulate extends Component {



    getTimestamp = () => {
        const date = new Date()
        const date2 = date.toLocaleDateString()
        const timestamp = date.toLocaleTimeString()
        return <p>{`${date2}  at  ${timestamp}`}</p>
    }

    newRegulateEntry = () => {
        this.props.history.push('/regulate/new')
    }

    render() {
        const username = this.props.user.username;

        return (
            <>
                <h2>It's good to see you, {username}!</h2>
                {this.getTimestamp()}
                <div id="regulate-logo">
                    <img src={RegulateLogo}></img>
                </div>
                <Button onClick={this.newRegulateEntry}>New Entry</Button>
            </>


        )
    }
}