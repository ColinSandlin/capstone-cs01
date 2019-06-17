import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Statscss from "./Statscss.css"
import moment from "moment"


export default class Stats extends React.Component {



    render() {
        return (
            <>
                <div className="quick-hits-container">
                    <div className="quick-hit">
                        <h4>{this.props.allEntries.length}</h4>
                        <p>Total Number of Entries</p>
                    </div>
                    <div className="quick-hit">
                        <h4>{this.props.weeksEntries.length}</h4>
                        <p>Entries this Week</p>
                    </div>
                    <div className="quick-hit">
                        <h4>{this.props.monthsEntries.length}</h4>
                        <p>Entries this Month</p>
                    </div>
                </div>
                <div>
                    <Doughnut data={this.props.donutData} />
                </div>
            </>
        );
    }
}
