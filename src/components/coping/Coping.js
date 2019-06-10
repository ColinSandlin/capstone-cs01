import React, { Component } from "react";
import Carousel from 're-carousel'
import IndicatorDots from './indicator-dots'
import GreatCmCard from './GreatCmCard'
import GoodCmCard from './GoodCmCard'
import OkayCmCard from './OkayCmCard'
import NotSoGreatCmCard from './NotSoGreatCmCard'
import BadCmCard from './BadCmCard'

import cardCss from './cardCss.css'



export default class Coping extends Component {
    render() {
        return (
            <Carousel widgets={[IndicatorDots]} >
                {
                    (this.props.moodCategoryId === 5) ? (
                        this.props.greatCopingMechs.map(copingMech => {
                            return <GreatCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                        })
                    ) :
                        (this.props.moodCategoryId === 4) ? (
                            this.props.goodCopingMechs.map(copingMech => {
                                return <GoodCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                            })
                        ) :
                            (this.props.moodCategoryId === 3) ? (
                                this.props.okayCopingMechs.map(copingMech => {
                                    return <OkayCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                                })
                            ) :
                                (this.props.moodCategoryId === 2) ? (
                                    this.props.notSoGreatCopingMechs.map(copingMech => {
                                        return <NotSoGreatCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                                    })
                                ) :
                                    (this.props.moodCategoryId === 1) ? (
                                        this.props.badCopingMechs.map(copingMech => {
                                            return <BadCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                                        })
                                    ) : null
                }
            </Carousel>
        )
    }
}