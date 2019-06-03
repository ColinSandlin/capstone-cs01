import React, { Component } from "react";
import { withRouter } from 'react-router'
import ApplicationViews from "../ApplicationViews"
import TopNav from '../nav/TopNav';



export default class Home extends Component {
    render() {
        return (
            <>
                <TopNav />
                <ApplicationViews />
            </>

        )
    }
}