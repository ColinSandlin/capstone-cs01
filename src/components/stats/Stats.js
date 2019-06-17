import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Statscss from "./Statscss.css"


export default class Stats extends React.Component {


    render() {
        return (
            <div>
                <Doughnut data={this.props.donutData} />
            </div>
        );
    }
}
