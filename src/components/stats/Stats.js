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
            ],
        }
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
                <div style={{ marginTop: '200px' }}>
                    <Line data={this.assignData}
                        options={{
                            legend: {
                                display: false,
                            },
                            scales: {
                                xAxes: [{
                                    ticks: { display: true },
                                    gridLines: {
                                        display: false,
                                        drawBorder: true
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        display: true,
                                        callback: function (label) {
                                            switch (label) {
                                                case 0:
                                                    return 'Bad';
                                                case 1:
                                                    return 'Not Great';
                                                case 2:
                                                    return 'Neutral';
                                                case 3:
                                                    return 'Good';
                                                case 4:
                                                    return 'Great';
                                            }
                                        },
                                        max: 5,
                                        min: 1,
                                        stepSize: 1,
                                    },
                                    gridLines: {
                                        display: false,
                                        drawBorder: true
                                    }
                                }]
                            },
                            title: {
                                display: true,
                                text: "Average Mood [Past 6 Months]"
                            },
                        }} />
                </div>
            </>
        );
    }
}
