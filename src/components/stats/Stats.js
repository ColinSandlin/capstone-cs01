import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import Statscss from "./Statscss.css"
import moment from "moment"


export default class Stats extends React.Component {

    assignData = () => {
        const lineInfo = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Average Mood',
                    fill: true,
                    data: this.props.lineData,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    showLine: true,
                }
            ]
        }
        console.log(lineInfo)
        return lineInfo
    }

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
                <div>
                    <Line data={this.assignData} />
                </div>
            </>
        );
    }
}
