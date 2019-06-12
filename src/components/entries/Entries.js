import React, { Component } from "react";
import EntryCss from "./EntryCss.css"



export default class Entries extends Component {



    render() {
        return (
            <>
                {
                    this.props.allEntries.map(entry => {
                        return (
                            <div key={entry.id} className="entry-overall-container">
                                <div className="entry-date-container">
                                    <p className="entry-date-month">September</p>
                                    <p className="entry-date-number">24</p>
                                    <p className="entry-date-year">2019</p>
                                </div>
                                <div className="divider"></div>
                                <div className="entry-info-container">
                                    <div className="entry-heading-container">
                                        <h6 className="entry-heading-text">
                                            {
                                                (entry.moodCategory) ? (entry.moodCategory.name) : null
                                            }
                                        </h6>
                                    </div>
                                    <div className="entry-entry-container">
                                        <h6 className="entry-mood">{entry.selectedMood}</h6>
                                        <p className="entry-text">{entry.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}