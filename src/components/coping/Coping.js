import React, { Component } from "react";
import { withRouter } from 'react-router'
import Carousel from 're-carousel'



export default class Coping extends Component {
    render() {
        return (
            <Carousel auto>
                {
                    (this.props.moodCategoryId === 5) ? (
                        this.props.greatCopingMechs.map(copingMech => {
                            return <div key={copingMech.id}><h1>5</h1></div>
                        })
                    ) : (this.props.moodCategoryId === 4) ? (
                        this.props.goodCopingMechs.map(copingMech => {
                            return <div key={copingMech.id}><h1>4</h1></div>
                        })
                    ) :
                            (this.props.moodCategoryId === 3) ? (
                                this.props.okayCopingMechs.map(copingMech => {
                                    return <div key={copingMech.id}><h1>3</h1></div>
                                })
                            ) :
                                (this.props.moodCategoryId === 2) ? (
                                    this.props.notSoGreatCopingMechs.map(copingMech => {
                                        return <div key={copingMech.id}><h1>2</h1></div>
                                    })
                                ) :
                                    (this.props.moodCategoryId === 1) ? (
                                        this.props.badCopingMechs.map(copingMech => {
                                            return <div key={copingMech.id}><h1>1</h1></div>
                                        })
                                    ) : null
                }
            </Carousel>
        )
    }
}