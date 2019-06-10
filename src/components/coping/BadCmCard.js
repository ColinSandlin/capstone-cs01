import React, { Component } from "react";
import { FaRegSadTear } from "react-icons/fa";

export default class BadCmCard extends Component {

    state = {
        showinfo: false
    }

    toggleExpansion = () => {
        this.setState({ showinfo: !this.state.showinfo })
    }
    render() {
        return (
            <article key={this.props.copingMechId} className="card">
                <div className="thumb" style={{ backgroundImage: `url(${this.props.copingMechUrl})` }}></div>
                <div className="infos">
                    <h2 className="title">{this.props.copingMechTitle}<FaRegSadTear className="flag" /> </h2>
                    <h3 className="date">{this.props.copingMechInfo}</h3>
                    <p className="txt">{this.props.copingMechInfo2}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </article>
        )
    }
}