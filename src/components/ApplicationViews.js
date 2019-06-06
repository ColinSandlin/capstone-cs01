import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import API from "./db/API";
import Regulate from "./regulate/Regulate";
import Coping from "./coping/Coping";
import Stats from "./stats/Stats";
import Entries from "./entries/Entries";
import Contact from "./findhelp/FindHelp"



export default class ApplicationViews extends Component {
    render() {
        return (
            <>
                <Route exact path="/regulate" render={(props) => {

                    return <Regulate />

                }} />
                <Route path="/coping" render={(props) => <Coping {...props} />} />
                <Route path="/stats" render={(props) => <Stats {...props} />} />
                <Route path="/entries" render={(props) => <Entries {...props} />} />
                <Route path="/contact" render={(props) => <Contact {...props} />} />
            </>
        )
    }
}

